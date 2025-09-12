import type {
  Book,
  BookId,
  NewBook,
  UpdateBook
} from "../../../shared/types.js";

import { EXAMPLE_BOOKS } from "../constants.js";

export default class BookRepository {
  #books = EXAMPLE_BOOKS;
  #lastId = EXAMPLE_BOOKS.length - 1;

  create(book: NewBook): Book {
    const newBook: Book = { ...book, id: this.#lastId + 1 };
    this.#lastId += 1;
    this.#books.push(newBook);
    return newBook;
  }

  delete(id: BookId): BookId | undefined {
    const length = this.#books.length;
    this.#books = this.#books.filter((b) => b.id !== id);
    return this.#books.length < length ? id : undefined;
  }

  deleteAll(): (BookId | undefined)[] {
    const bookIds = this.#books.map((b) => b.id);
    const deletedBookIds = bookIds.map((id) => this.delete(id));
    return deletedBookIds;
  }

  get(id: BookId): Book | undefined {
    return this.#books.find((b) => b.id === id);
  }

  list(): Book[] {
    return this.#books;
  }

  update(id: BookId, data: UpdateBook): Book | undefined {
    const index = this.#books.findIndex((b) => b.id === id);

    if (index === -1) {
      return;
    }

    return Object.assign(this.#books[index], data);
  }
}
