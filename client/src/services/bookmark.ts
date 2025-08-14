import * as z from "zod";

import type { Bookmark } from "../../../shared/types";

import { BookmarkSchema } from "../../../shared/validations";

export async function getBookmarks(): Promise<Bookmark[]> {
  try {
    const res = await fetch("http://localhost:3000/bookmarks");

    if (!res.ok) {
      throw new Error(`HTTP_ERROR`);
    }

    const data: unknown = await res.json();
    const bookmarks = z.array(BookmarkSchema).parse(data);
    return bookmarks;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("DATA_VALIDATION_ERROR");
    }
    throw new Error("FETCH_ERROR");
  }
}
