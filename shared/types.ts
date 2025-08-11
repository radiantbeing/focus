import z from "zod";

import { BookmarkSchema, BookSchema } from "./validations.js";

export type Book = z.infer<typeof BookSchema>;

export type Bookmark = z.infer<typeof BookmarkSchema>;
