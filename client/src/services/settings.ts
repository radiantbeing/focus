import z from "zod";

import type { BookId, BookmarkId } from "../../../shared/types";

import { BookIdSchema, BookmarkIdSchema } from "../../../shared/validations";
import { fetcher } from "../utils/fetcher";

export async function purgeBookmarks(): Promise<(BookmarkId | undefined)[]> {
  const data = await fetcher("/bookmarks", {
    method: "DELETE"
  });
  const deletedBookmarkIds = z.array(BookmarkIdSchema.optional()).parse(data);
  return deletedBookmarkIds;
}

export async function purgeBooks(): Promise<(BookId | undefined)[]> {
  const data = await fetcher("/books", {
    method: "DELETE"
  });
  const deletedBookIds = z.array(BookIdSchema.optional()).parse(data);
  return deletedBookIds;
}
