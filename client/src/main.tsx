import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Books from "./pages/books/Books";
import NotFound from "./pages/NotFound";
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
            <Route path="books">
              <Route element={<Books />} index />
            </Route>
            <Route path="bookmarks">
              <Route element={<Bookmarks />} index />
            </Route>
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
