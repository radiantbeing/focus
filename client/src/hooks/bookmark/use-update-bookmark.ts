import { useNavigate } from "react-router";

import type { BookmarkId } from "../../../../shared/types";

import { NewBookmarkSchema } from "../../../../shared/validations";
import { updateBookmark } from "../../services/bookmark";

interface UseUpdateBookmarkReturn {
  handleUpdate: (formData: FormData) => Promise<void>;
}

export default function useUpdateBookmark(
  id?: BookmarkId
): UseUpdateBookmarkReturn {
  const navigate = useNavigate();

  async function handleUpdate(formData: FormData): Promise<void> {
    if (id === undefined) {
      return;
    }

    const bookId = formData.get("bookId");
    const page = formData.get("page");
    const summary = formData.get("summary");

    const inputs = NewBookmarkSchema.parse({
      bookId: bookId,
      page: typeof page === "string" ? parseInt(page) : page,
      summary
    });

    const updatedBookmark = await updateBookmark(id, inputs);
    await navigate(`/bookmarks/${updatedBookmark.id}`);
  }

  return { handleUpdate };
}
