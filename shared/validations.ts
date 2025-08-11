import * as z from "zod";

export const BookSchema = z.object({
    author: z.string(),
    id: z.number(),
    title: z.string()
});

export const BookmarkSchema = z.object({
    bookId: z.number(),
    date: z.coerce.date(),
    id: z.number(),
    page: z.number(),
    summary: z.string()
});
