import { useEffect, useReducer, useRef } from "react";

type QueryAction<T> =
  | { data: T; type: "QUERY_SUCCESS" }
  | { error: Error; type: "QUERY_ERROR" }
  | { type: "QUERY_LOADING" };

type QueryState<T> =
  | { data: null; error: Error; status: "error" }
  | { data: null; error: null; status: "loading" }
  | { data: T; error: null; status: "success" };

export default function useQuery<T>(
  queryKey: unknown[],
  queryFn: () => Promise<T> | T
): QueryState<T> {
  const [state, dispatch] = useReducer(queryReducer<T>, {
    data: null,
    error: null,
    status: "loading",
  });

  const queryFnRef = useRef(queryFn);

  useEffect(() => {
    queryFnRef.current = queryFn;
  });

  useEffect(() => {
    let ignore = false;

    dispatch({ type: "QUERY_LOADING" });

    Promise.resolve(queryFnRef.current())
      .then((data) => {
        if (ignore) {
          return;
        }
        dispatch({
          data,
          type: "QUERY_SUCCESS",
        });
      })
      .catch((error: unknown) => {
        if (ignore) {
          return;
        }
        dispatch({
          error:
            error instanceof Error
              ? error
              : new Error("데이터 질의에 실패했습니다."),
          type: "QUERY_ERROR",
        });
      });

    return () => {
      ignore = true;
    };

    // 현재 useEffect의 의존성 배열에 배열 리터럴이 아닌 queryKey를 할당한 것은
    // 의도적인 것으로 외부 종속성에 의해 useEffect에 전달된 콜백 함수를 트리거 하기
    // 위함이다. 따라서 ESLint의 경고를 비활성화했다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, queryKey);

  return state;
}

function queryReducer<T>(
  _state: QueryState<T>,
  action: QueryAction<T>
): QueryState<T> {
  switch (action.type) {
    case "QUERY_ERROR":
      return {
        data: null,
        error: action.error,
        status: "error",
      };
    case "QUERY_LOADING":
      return {
        data: null,
        error: null,
        status: "loading",
      };
    case "QUERY_SUCCESS":
      return {
        data: action.data,
        error: null,
        status: "success",
      };
    default:
      throw new Error("일치하는 액션 유형이 없습니다.");
  }
}
