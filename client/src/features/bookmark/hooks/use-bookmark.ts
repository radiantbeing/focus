import type { BookmarkId } from "@shared/types";

import {
  getBookmark,
  listBookmarks,
} from "@client/features/bookmark/services/bookmark";
import useQuery from "@client/hooks/use-query";

export function useBookmark(id: BookmarkId) {
  return useQuery([id], () => getBookmark(id));
}

export function useBookmarks() {
  return useQuery([], listBookmarks);
}
