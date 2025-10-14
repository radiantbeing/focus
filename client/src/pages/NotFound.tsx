import ErrorDisplay from "@client/ui/error/ErrorDisplay";
import React from "react";

export default function NotFound(): React.JSX.Element {
  return <ErrorDisplay message="잘못된 접근입니다." />;
}
