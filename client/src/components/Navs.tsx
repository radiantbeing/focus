import { Bolt, Bookmark, LibraryBig } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function Navs(): React.JSX.Element {
  return (
    <nav className="fixed bottom-0 flex h-15 w-full max-w-150 items-center border-t border-gray-400 bg-white px-3 pt-1">
      <NavLink
        className={({ isActive }) =>
          "flex flex-1 flex-col items-center gap-y-0.5 text-sm " +
          (isActive ? "text-black" : "text-gray-400")
        }
        to="/reading"
      >
        <Bookmark size={18} />
        <span>책갈피</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "flex flex-1 flex-col items-center gap-y-0.5 text-sm " +
          (isActive ? "text-black" : "text-gray-400")
        }
        to="/library"
      >
        <LibraryBig size={18} />
        <span>서재</span>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          "flex flex-1 flex-col items-center gap-y-0.5 text-sm " +
          (isActive ? "text-black" : "text-gray-400")
        }
        to="/settings"
      >
        <Bolt size={18} />
        <span>설정</span>
      </NavLink>
    </nav>
  );
}
