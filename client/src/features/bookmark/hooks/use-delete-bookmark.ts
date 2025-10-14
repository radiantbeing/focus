import type { BookmarkId } from "@shared/types";

import { deleteBookmark } from "@client/features/bookmark/services/bookmark";
import { useNavigate } from "react-router";

interface UseDeleteBookmarkReturn {
  handleDelete: () => Promise<void>;
}

export default function useDeleteBookmark(
  id?: BookmarkId
): UseDeleteBookmarkReturn {
  const navigate = useNavigate();

  async function handleDelete(): Promise<void> {
    if (id === undefined) {
      return;
    }
    await deleteBookmark(id);
    await navigate("/bookmarks");
  }

  return { handleDelete };
}
