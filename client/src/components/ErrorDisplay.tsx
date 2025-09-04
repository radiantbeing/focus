import { TriangleAlert } from "lucide-react";
import React from "react";

interface ErrorProps {
  error?: Error;
  message?: string;
}

export default function ErrorDisplay({
  error,
  message
}: ErrorProps): React.JSX.Element {
  const defaultMessage =
    error !== undefined
      ? `[${error.name}] ${error.message}`
      : "알 수 없는 오류가 발생했습니다.";

  return (
    <article className="flex h-full flex-col items-center justify-center gap-y-3">
      <TriangleAlert className="text-gray-600" size={48} />
      <p>{message ?? defaultMessage}</p>
    </article>
  );
}
