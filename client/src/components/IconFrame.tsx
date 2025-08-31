import React from "react";

interface IconFrameProps {
  children?: React.ReactNode;
}

export default function IconFrame({
  children
}: IconFrameProps): React.JSX.Element {
  return (
    <div className="flex w-fit cursor-pointer items-center justify-center rounded-sm border border-gray-300 p-2">
      {children}
    </div>
  );
}
