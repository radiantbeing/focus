import * as z from "zod";

import type { Bookmark } from "../../../shared/types";

import { BookmarkSchema } from "../../../shared/validations";
import { fetcher } from "../utils/fetcher";

export async function listBookmarks(): Promise<Bookmark[]> {
  const data = await fetcher("/bookmarks");
  const bookmarks = z.array(BookmarkSchema).parse(data);
  return bookmarks;
}
