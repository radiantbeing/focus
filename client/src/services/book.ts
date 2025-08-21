import * as z from "zod";

import type { Book, NewBook } from "../../../shared/types";

import { BookSchema } from "../../../shared/validations";

export async function createBook({
  author,
  title
}: Pick<Book, "author" | "title">): Promise<Book> {
  try {
    const res = await fetch("http://localhost:3000/books", {
      body: JSON.stringify({ author, title }),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });

    if (!res.ok) {
      throw new Error(`HTTP_ERROR`);
    }

    const data: unknown = await res.json();
    const book = BookSchema.parse(data);
    return book;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("DATA_VALIDATION_ERROR");
    }
    throw new Error("FETCH_ERROR");
  }
}

export async function deleteBook(id: number): Promise<void> {
  try {
    const res = await fetch(`http://localhost:3000/books/${id.toString()}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE"
    });

    if (!res.ok) {
      throw new Error(`HTTP_ERROR`);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("DATA_VALIDATION_ERROR");
    }
    throw new Error("FETCH_ERROR");
  }
}

export async function getBook(id: number): Promise<Book> {
  try {
    const res = await fetch(`http://localhost:3000/books/${id.toString()}`);

    if (!res.ok) {
      throw new Error(`HTTP_ERROR`);
    }

    const data: unknown = await res.json();
    const book = BookSchema.parse(data);
    return book;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("DATA_VALIDATION_ERROR");
    }
    throw new Error("FETCH_ERROR");
  }
}

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

export async function updateBook(id: number, bookData: NewBook): Promise<Book> {
  try {
    const res = await fetch(`http://localhost:3000/books/${id.toString()}`, {
      body: JSON.stringify(bookData),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    });

    if (!res.ok) {
      throw new Error(`HTTP_ERROR`);
    }

    const data: unknown = await res.json();
    const book = BookSchema.parse(data);
    return book;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("DATA_VALIDATION_ERROR");
    }
    throw new Error("FETCH_ERROR");
  }
}
