import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import BookmarkDetail from "./pages/bookmarks/BookmarkDetail";
import BookmarkList from "./pages/bookmarks/BookmarkList";
import BookmarkNew from "./pages/bookmarks/BookmarkNew";
import BookmarkUpdate from "./pages/bookmarks/BookmarkUpdate";
import BookDetail from "./pages/books/BookDetail";
import BookList from "./pages/books/BookList";
import BookNew from "./pages/books/BookNew";
import BookUpdate from "./pages/books/BookUpdate";
import NotFound from "./pages/NotFound";
import SettingsList from "./pages/settings/SettingsList";
import Splash from "./pages/Splash";
import Layout from "./ui/layout/Layout";
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
              <Route element={<BookList />} index />
              <Route element={<BookNew />} path="new" />
              <Route element={<BookDetail />} path=":bookId" />
              <Route element={<BookUpdate />} path=":bookId/edit" />
            </Route>
            <Route path="bookmarks">
              <Route element={<BookmarkList />} index />
              <Route element={<BookmarkNew />} path="new" />
              <Route element={<BookmarkDetail />} path=":bookmarkId" />
              <Route element={<BookmarkUpdate />} path=":bookmarkId/edit" />
            </Route>
            <Route path="settings">
              <Route element={<SettingsList />} index />
            </Route>
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
