import { useNavigate } from "react-router";

import { NewBookmarkSchema } from "../../../../shared/validations";
import { createBookmark } from "../../services/bookmark";

interface UseCreateBookmarkReturn {
  handleCreate: (formData: FormData) => Promise<void>;
}

export default function useCreateBookmark(): UseCreateBookmarkReturn {
  const navigate = useNavigate();

  async function handleCreate(formData: FormData): Promise<void> {
    const bookId = formData.get("bookId");
    const page = formData.get("page");
    const summary = formData.get("summary");

    const inputs = NewBookmarkSchema.parse({
      bookId: typeof bookId === "string" ? parseInt(bookId) : bookId,
      page: typeof page === "string" ? parseInt(page) : page,
      summary
    });
    const createdBookmark = await createBookmark(inputs);

    await navigate(`/bookmarks/${createdBookmark.id.toString()}`);
  }

  return { handleCreate };
}
