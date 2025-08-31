import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";
import BookmarkPage from "./pages/bookmarks/BookmarkPage";
import BookmarksPage from "./pages/bookmarks/BookmarksPage";
import BookPage from "./pages/books/BookPage";
import BooksPage from "./pages/books/BooksPage";
import NewBookPage from "./pages/books/NewBookPage";
import NotFoundPage from "./pages/NotFoundPage";
import SplashPage from "./pages/SplashPage";
import "./main.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<SplashPage />} index />
          <Route element={<Layout />}>
            <Route path="books">
              <Route element={<BooksPage />} index />
              <Route element={<NewBookPage />} path="new" />
              <Route element={<BookPage />} path=":bookId/edit?" />
            </Route>
            <Route path="bookmarks">
              <Route element={<BookmarksPage />} index />
              <Route element={<BookmarkPage />} path="new" />
              <Route element={<BookmarkPage />} path=":bookmarkId/edit?" />
            </Route>
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
