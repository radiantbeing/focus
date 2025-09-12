import { useParams } from "react-router";

import type { BookmarkId } from "../../../../shared/types";

import { BookmarkIdSchema } from "../../../../shared/validations";

export default function useBookmarkIdParam(): BookmarkId | undefined {
  const { bookmarkId } = useParams();

  return BookmarkIdSchema.parse(bookmarkId);
}
