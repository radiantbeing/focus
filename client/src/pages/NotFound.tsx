import React from "react";

import Error from "../components/Error";

export default function NotFound(): React.JSX.Element {
  return <Error text="잘못된 접근입니다." />;
}
