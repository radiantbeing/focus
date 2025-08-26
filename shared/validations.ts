import * as z from "zod";

export const BookIdSchema = z.number().int().min(0);
export const BookmarkIdSchema = z.number().int().min(0);

export const BookSchema = z.object({
  author: z.string().min(1),
  id: BookIdSchema,
  title: z.string().min(1)
});
export const BookmarkSchema = z.object({
  bookId: BookIdSchema,
  date: z.coerce.date(),
  id: BookmarkIdSchema,
  page: z.number().int().min(1),
  summary: z.string()
});

export const NewBookSchema = BookSchema.omit({ id: true });
export const NewBookmarkSchema = BookmarkSchema.omit({ id: true });

export const UpdateBookSchema = NewBookSchema.partial();
export const UpdateBookmarkSchema = NewBookmarkSchema.partial();
