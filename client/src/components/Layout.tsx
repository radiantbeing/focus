import React from "react";
import { Outlet } from "react-router";

import Navs from "./Navs";

export default function App(): React.JSX.Element {
  return (
    <div className="mx-auto w-full max-w-150">
      <header className="fixed top-0 flex h-12 w-full max-w-150 items-center border-b border-gray-400 px-3 font-[Tinos] text-2xl backdrop-blur-3xl">
        FOCUS
      </header>
      <main className="px-3 pt-14 pb-17">
        <Outlet />
      </main>
      <Navs />
    </div>
  );
}
