import z from "zod";

import {
  BookIdSchema,
  BookmarkIdSchema,
  BookmarkSchema,
  BookSchema,
  NewBookmarkSchema,
  NewBookSchema,
  UpdateBookmarkSchema,
  UpdateBookSchema
} from "./validations.js";

export type Book = z.infer<typeof BookSchema>;
export type BookId = z.infer<typeof BookIdSchema>;

export type Bookmark = z.infer<typeof BookmarkSchema>;
export type BookmarkId = z.infer<typeof BookmarkIdSchema>;

export type NewBook = z.infer<typeof NewBookSchema>;
export type NewBookmark = z.infer<typeof NewBookmarkSchema>;

export type UpdateBook = z.infer<typeof UpdateBookSchema>;
export type UpdateBookmark = z.infer<typeof UpdateBookmarkSchema>;
