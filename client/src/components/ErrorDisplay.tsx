import { TriangleAlert } from "lucide-react";
import React from "react";
import { ZodError } from "zod";

interface ErrorProps {
  error?: Error;
  message?: string;
}

export default function ErrorDisplay({
  error,
  message,
}: ErrorProps): React.JSX.Element {
  React.useEffect(
    function () {
      if (error === undefined || import.meta.env.PROD) {
        return;
      }
      console.error(error);
    },
    [error]
  );

  let defaultMessage = "알 수 없는 오류가 발생했습니다.";

  if (error instanceof ZodError) {
    defaultMessage = "데이터 검증 오류가 발생했습니다.";
  }

  return (
    <article className="fixed inset-0 flex h-full flex-col items-center justify-center gap-y-3">
      <TriangleAlert className="text-gray-600" size={48} />
      <p>{message ?? defaultMessage}</p>
    </article>
  );
}
