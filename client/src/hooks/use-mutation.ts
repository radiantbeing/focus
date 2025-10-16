import { useReducer } from "react";

type MutationAction<T> =
  | { data: T; type: "MUTATE_SUCCESS" }
  | { error: Error; type: "MUTATE_ERROR" }
  | { type: "MUTATE" };

type MutationState<T> =
  | { data: null; error: Error; status: "error" }
  | { data: null; error: null; status: "idle" }
  | { data: null; error: null; status: "loading" }
  | { data: T; error: null; status: "success" };

interface UseMutationOptions<Output, Input> {
  mutationFn: (input: Input) => Output | Promise<Output>;
  onError?: (error: Error) => void;
  onSuccess?: (output: Output) => Promise<void> | void;
}

export default function useMutation<Output, Input>(
  options: UseMutationOptions<Output, Input>
) {
  const [state, dispatch] = useReducer(mutationReducer<Output>, {
    data: null,
    error: null,
    status: "idle",
  });

  async function mutate(input: Input) {
    dispatch({ type: "MUTATE" });
    try {
      const output = await options.mutationFn(input);
      dispatch({ data: output, type: "MUTATE_SUCCESS" });
      await options.onSuccess?.(output);
    } catch (error: unknown) {
      const occuredError =
        error instanceof Error
          ? error
          : new Error("데이터를 변형하지 못했습니다.");
      dispatch({
        error: occuredError,
        type: "MUTATE_ERROR",
      });
      options.onError?.(occuredError);
    }
  }

  return {
    ...state,
    mutate,
  };
}

function mutationReducer<T>(
  _state: MutationState<T>,
  action: MutationAction<T>
): MutationState<T> {
  switch (action.type) {
    case "MUTATE":
      return { data: null, error: null, status: "loading" };
    case "MUTATE_ERROR":
      return { data: null, error: action.error, status: "error" };
    case "MUTATE_SUCCESS":
      return { data: action.data, error: null, status: "success" };
    default:
      throw new Error("일치하는 액션 유형이 없습니다.");
  }
}
