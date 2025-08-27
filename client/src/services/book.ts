import * as z from "zod";

import type { Book, BookId, NewBook } from "../../../shared/types";

import { BookIdSchema, BookSchema } from "../../../shared/validations";
import { fetcher } from "../utils/fetcher";

export async function createBook({
  author,
  title
}: Pick<Book, "author" | "title">): Promise<Book> {
  const data = await fetcher("/books", {
    body: JSON.stringify({ author, title }),
    method: "POST"
  });
  const createdBook = BookSchema.parse(data);
  return createdBook;
}

export async function deleteBook(id: number): Promise<BookId> {
  const data = await fetcher(`/books/${id.toString()}`, {
    method: "DELETE"
  });
  const deletedBookId = BookIdSchema.parse(data);
  return deletedBookId;
}

export async function getBook(id: number): Promise<Book> {
  const data = await fetcher(`/books/${id.toString()}`);
  const book = BookSchema.parse(data);
  return book;
}

export async function listBooks(): Promise<Book[]> {
  const data = await fetcher("/books");
  const books = z.array(BookSchema).parse(data);
  return books;
}

export async function updateBook(id: number, bookData: NewBook): Promise<Book> {
  const data = await fetcher(`/books/${id.toString()}`, {
    body: JSON.stringify(bookData),
    method: "PUT"
  });
  const book = BookSchema.parse(data);
  return book;
}
