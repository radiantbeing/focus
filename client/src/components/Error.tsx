import { TriangleAlert } from "lucide-react";
import React from "react";

interface ErrorProps {
  text?: string;
}

export default function Error({
  text = "알 수 없는 오류가 발생했습니다."
}: ErrorProps): React.JSX.Element {
  return (
    <article className="flex h-full flex-col items-center justify-center gap-y-3">
      <TriangleAlert className="text-gray-600" size={48} />
      <p>{text}</p>
    </article>
  );
}
