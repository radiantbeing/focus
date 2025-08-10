import { Bolt, Bookmark, LibraryBig } from "lucide-react";
import { NavLink } from "react-router";
import React from "react";

export default function Navs(): React.JSX.Element {
    return (
        <nav className="fixed bottom-0 flex h-15 w-full max-w-150 items-center border-t border-gray-400 bg-white px-3 pt-1">
            <NavLink
                to="/library"
                className={({ isActive }) =>
                    "flex flex-1 flex-col items-center gap-y-0.5 text-sm " +
                    (isActive ? "text-black" : "text-gray-400")
                }
            >
                <LibraryBig size={18} />
                <span>서재</span>
            </NavLink>
            <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                    "flex flex-1 flex-col items-center gap-y-0.5 text-sm " +
                    (isActive ? "text-black" : "text-gray-400")
                }
            >
                <Bookmark size={18} />
                <span>책갈피</span>
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    "flex flex-1 flex-col items-center gap-y-0.5 text-sm " +
                    (isActive ? "text-black" : "text-gray-400")
                }
            >
                <Bolt size={18} />
                <span>설정</span>
            </NavLink>
        </nav>
    );
}
