import React from "react";
import { PuffLoader } from "react-spinners";

interface LoadingProps {
  message?: string;
}

export default function Loading({
  message = "로딩 중입니다."
}: LoadingProps): React.JSX.Element {
  return (
    <article className="flex h-full flex-col items-center justify-center gap-y-3">
      <PuffLoader size={48} />
      <p>{message}</p>
    </article>
  );
}
