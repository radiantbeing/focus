import type { Bookmark, BookmarkId, NewBookmark } from "@shared/types";

import useMutation from "@client/hooks/use-mutation";
import { useNavigate } from "react-router";

import {
  createBookmark,
  deleteBookmark,
  updateBookmark,
} from "../services/bookmark";

export function useCreateBookmark() {
  const navigate = useNavigate();

  return useMutation<Bookmark, NewBookmark>({
    mutationFn(input) {
      return createBookmark(input);
    },
    onSuccess(bookmark) {
      void navigate(`/bookmarks/${bookmark.id.toString()}`);
    },
  });
}

export function useDeleteBookmark() {
  const navigate = useNavigate();

  return useMutation<Bookmark, BookmarkId>({
    mutationFn(id) {
      return deleteBookmark(id);
    },
    onSuccess() {
      void navigate("/bookmarks");
    },
  });
}

export function useUpdateBookmark() {
  const navigate = useNavigate();

  return useMutation<Bookmark, { id: BookmarkId; input: NewBookmark }>({
    mutationFn({ id, input }) {
      return updateBookmark(id, input);
    },
    onSuccess(bookmark) {
      void navigate(`/bookmarks/${bookmark.id.toString()}`);
    },
  });
}
