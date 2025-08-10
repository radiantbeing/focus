import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Splash />} />
                    <Route element={<Layout />}>
                        <Route path="library" element={<Library />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}
