import z from "zod";

import { BookmarkSchema, BookSchema, NewBookSchema } from "./validations.js";

export type Book = z.infer<typeof BookSchema>;

export type Bookmark = z.infer<typeof BookmarkSchema>;

export type NewBook = z.infer<typeof NewBookSchema>;
