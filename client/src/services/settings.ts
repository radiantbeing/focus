import z from "zod";

import type { Book, BookId, Bookmark, BookmarkId } from "../../../shared/types";

import {
  BookIdSchema,
  BookmarkIdSchema,
  BookmarkSchema,
  BookSchema,
} from "../../../shared/validations";
import { fetcher } from "../utils/fetcher";

export async function exportData(): Promise<{
  bookmarks: Bookmark[];
  books: Book[];
}> {
  const data = await fetcher("/settings/export");
  const exportedData = z
    .object({ bookmarks: z.array(BookmarkSchema), books: z.array(BookSchema) })
    .parse(data);
  return exportedData;
}

export async function purgeBookmarks(): Promise<(BookmarkId | undefined)[]> {
  const data = await fetcher("/bookmarks", {
    method: "DELETE",
  });
  const deletedBookmarkIds = z.array(BookmarkIdSchema.optional()).parse(data);
  return deletedBookmarkIds;
}

export async function purgeBooks(): Promise<(BookId | undefined)[]> {
  const data = await fetcher("/books", {
    method: "DELETE",
  });
  const deletedBookIds = z.array(BookIdSchema.optional()).parse(data);
  return deletedBookIds;
}
