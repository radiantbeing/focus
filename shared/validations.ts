import * as z from "zod";

const RX_ID = /^\d+$/;

export const BookIdSchema = z.preprocess(
  function (value) {
    if (typeof value === "string" && RX_ID.test(value)) {
      const bigIntValue = BigInt(value);
      return bigIntValue > BigInt(Number.MAX_SAFE_INTEGER)
        ? bigIntValue
        : parseInt(value);
    }
    return value;
  },
  z.union([z.number().int().min(1), z.bigint().min(1n)])
);

export const BookmarkIdSchema = BookIdSchema;

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
export const NewBookmarkSchema = BookmarkSchema.omit({ date: true, id: true });

export const UpdateBookSchema = NewBookSchema;
export const UpdateBookmarkSchema = NewBookmarkSchema;
