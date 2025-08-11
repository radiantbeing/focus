import React from "react";

import Navs from "./components/Navs";
import Library from "./pages/Library";

export default function App(): React.JSX.Element {
    return (
        <div className="mx-auto w-full max-w-150">
            <header className="fixed top-0 flex h-12 w-full max-w-150 items-center border-b border-gray-400 px-3 font-[Tinos] text-2xl backdrop-blur-3xl">
                FOCUS
            </header>
            <main className="px-3 pt-14 pb-17">
                <Library />
            </main>
            <Navs />
        </div>
    );
}
