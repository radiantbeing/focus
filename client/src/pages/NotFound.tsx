import React from "react";

import ErrorDisplay from "../components/ErrorDisplay";

export default function NotFound(): React.JSX.Element {
  return <ErrorDisplay message="잘못된 접근입니다." />;
}
