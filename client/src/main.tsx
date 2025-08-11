import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Reading from "./pages/Reading";
import Splash from "./pages/Splash";
import "./main.css";

const root = document.getElementById("root");
if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route element={<Splash />} index />
                    <Route element={<Layout />}>
                        <Route element={<Library />} path="library" />
                        <Route element={<Reading />} path="reading" />
                        <Route element={<NotFound />} path="*" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}
