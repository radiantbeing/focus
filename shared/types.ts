import z from "zod";

import {
  BookmarkSchema,
  BookSchema,
  NewBookmarkSchema,
  NewBookSchema,
  UpdateBookmarkSchema
} from "./validations.js";

export type Book = z.infer<typeof BookSchema>;

export type Bookmark = z.infer<typeof BookmarkSchema>;

export type NewBook = z.infer<typeof NewBookSchema>;

export type NewBookmark = z.infer<typeof NewBookmarkSchema>;

export type UpdateBookmark = z.infer<typeof UpdateBookmarkSchema>;
