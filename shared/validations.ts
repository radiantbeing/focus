import * as z from "zod";

export const BookmarkSchema = z.object({
  bookId: z.number().int().min(0),
  date: z.coerce.date(),
  id: z.number().int().min(0),
  page: z.number().int().min(1),
  summary: z.string()
});

export const BookSchema = z.object({
  author: z.string().min(1),
  id: z.number().int().min(0),
  title: z.string().min(1)
});

export const NewBookmarkSchema = BookmarkSchema.omit({ id: true });

export const NewBookSchema = BookSchema.omit({ id: true });

export const UpdateBookmarkSchema = NewBookmarkSchema.partial();
