import React from "react";

export default function NotFound(): React.JSX.Element {
  return (
    <>
      <div className="mt-1 mb-2 flex items-baseline gap-x-1">
        <h1 className="text-xl font-bold">Not Found</h1>
      </div>
      <article>
        <p>잘못된 접근입니다.</p>
      </article>
    </>
  );
}
