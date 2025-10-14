import React from "react";
import { Link } from "react-router";

// 상호 배타적 타입:
//
// `to` prop이 존재할 수 없다고 TypeScript에 명시적으로 알린다. `to?: never`가 없으면
// `<IconButton icon={...} to={...}/>` 형태의 컴포넌트 사용이 허용되고, 이는 <Link> 대신
// <button> 요소를 렌더링하는 문제가 있다.
type IconButtonProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      as?: "button";
      icon: React.JSX.Element;
      to?: never;
    })
  | (React.ComponentProps<typeof Link> & {
      as: "link";
      icon: React.JSX.Element;
    });

export default function IconButton(props: IconButtonProps): React.JSX.Element {
  if (props.as === "link") {
    const { icon, ...linkProps } = props;
    return (
      <Link
        className="flex w-fit cursor-pointer items-center justify-center rounded-sm border border-gray-300 p-2 hover:bg-gray-100"
        {...linkProps}
      >
        {icon}
      </Link>
    );
  }

  const { icon, ...buttonProps } = props;
  return (
    <button
      className="flex w-fit cursor-pointer items-center justify-center rounded-sm border border-gray-300 p-2 hover:bg-gray-100"
      {...buttonProps}
    >
      {icon}
    </button>
  );
}
