import type { Book, BookId, NewBook } from "@shared/types";

import { fetcher } from "@client/utils/fetcher";
import { BookSchema } from "@shared/validations";
import * as z from "zod";

export async function createBook({
  author,
  title,
}: Pick<Book, "author" | "title">): Promise<Book> {
  const data = await fetcher("/books", {
    body: JSON.stringify({ author, title }),
    method: "POST",
  });
  const createdBook = BookSchema.parse(data);
  return createdBook;
}

export async function deleteBook(id: BookId): Promise<Book> {
  const data = await fetcher(`/books/${id.toString()}`, {
    method: "DELETE",
  });
  const deletedBook = BookSchema.parse(data);
  return deletedBook;
}

export async function getBook(id: BookId): Promise<Book> {
  const data = await fetcher(`/books/${id.toString()}`);
  const book = BookSchema.parse(data);
  return book;
}

export async function listBooks(): Promise<Book[]> {
  const data = await fetcher("/books");
  const books = z.array(BookSchema).parse(data);
  return books;
}

export async function updateBook(id: BookId, bookData: NewBook): Promise<Book> {
  const data = await fetcher(`/books/${id.toString()}`, {
    body: JSON.stringify(bookData),
    method: "PUT",
  });
  const book = BookSchema.parse(data);
  return book;
}
