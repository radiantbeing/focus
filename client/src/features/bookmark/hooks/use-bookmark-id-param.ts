import type { BookmarkId } from "@shared/types";

import { BookmarkIdSchema } from "@shared/validations";
import { useParams } from "react-router";

export default function useBookmarkIdParam(): BookmarkId | undefined {
  const { bookmarkId } = useParams();

  return BookmarkIdSchema.parse(bookmarkId);
}
