import type {
  Bookmark,
  BookmarkId,
  NewBookmark,
  UpdateBookmark,
} from "@shared/types";

import { fetcher } from "@client/utils/fetcher";
import { BookmarkSchema } from "@shared/validations";
import * as z from "zod";

export async function createBookmark(
  bookmarkData: NewBookmark
): Promise<Bookmark> {
  const data = await fetcher("/bookmarks", {
    body: JSON.stringify(bookmarkData),
    method: "POST",
  });
  const createdBookmark = BookmarkSchema.parse(data);
  return createdBookmark;
}

export async function deleteBookmark(
  bookmarkId: BookmarkId
): Promise<Bookmark> {
  const data = await fetcher(`/bookmarks/${bookmarkId.toString()}`, {
    method: "DELETE",
  });
  const deletedBookmark = BookmarkSchema.parse(data);
  return deletedBookmark;
}

export async function getBookmark(bookmarkId: BookmarkId): Promise<Bookmark> {
  const data = await fetcher(`/bookmarks/${bookmarkId.toString()}`);
  const bookmark = BookmarkSchema.parse(data);
  return bookmark;
}

export async function listBookmarks(): Promise<Bookmark[]> {
  const data = await fetcher("/bookmarks");
  const bookmarks = z.array(BookmarkSchema).parse(data);
  return bookmarks;
}

export async function updateBookmark(
  bookmarkId: BookmarkId,
  bookmarkData: UpdateBookmark
): Promise<Bookmark> {
  const data = await fetcher(`/bookmarks/${bookmarkId.toString()}`, {
    body: JSON.stringify(bookmarkData),
    method: "PUT",
  });
  const updatedBookmark = BookmarkSchema.parse(data);
  return updatedBookmark;
}
