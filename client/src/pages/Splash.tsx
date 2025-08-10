import { Link } from "react-router";
import React from "react";

export default function Splash(): React.JSX.Element {
    return (
        <article className="mx-auto flex h-screen w-full max-w-150 flex-col items-center justify-center gap-y-3">
            <header className="font-[Tinos] text-4xl">FOCUS</header>
            <Link
                className="flex items-center rounded-xs bg-gray-100 px-3 py-2"
                to="/library"
            >
                시작하기
            </Link>
        </article>
    );
}
