import * as z from "zod";

export const Book = z.object({
    author: z.string(),
    id: z.number(),
    title: z.string()
});

export const Books = z.array(Book);
