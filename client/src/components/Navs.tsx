import { Bolt, Bookmark, LibraryBig } from "lucide-react";
import React from "react";

export default function Navs(): React.JSX.Element {
    return (
        <nav className="fixed bottom-0 flex h-15 w-full max-w-150 items-center border-t border-gray-400 bg-white px-3 pt-1">
            <a
                href="/library"
                className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
            >
                <LibraryBig size={18} />
                <span>서재</span>
            </a>
            <a
                href="/bookmark"
                className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
            >
                <Bookmark size={18} />
                <span>책갈피</span>
            </a>

            <a
                href="/setting"
                className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
            >
                <Bolt size={18} />
                <span>설정</span>
            </a>
        </nav>
    );
}
