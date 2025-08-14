import * as z from "zod";

import type { Book } from "../../../shared/types";

import { BookSchema } from "../../../shared/validations";

export async function getBooks(): Promise<Book[]> {
  try {
    const res = await fetch("http://localhost:3000/books");

    if (!res.ok) {
      throw new Error(`HTTP_ERROR`);
    }

    const data: unknown = await res.json();
    const books = z.array(BookSchema).parse(data);
    return books;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("DATA_VALIDATION_ERROR");
    }
    throw new Error("FETCH_ERROR");
  }
}
