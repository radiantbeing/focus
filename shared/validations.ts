import * as z from "zod";

export const BookSchema = z.object({
    author: z.string(),
    id: z.number(),
    title: z.string()
});
