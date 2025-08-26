import type {
  Book,
  BookId,
  NewBook,
  UpdateBook
} from "../../../shared/types.js";
import type BookRepository from "../repositories/book.js";
import type BookmarkRepository from "../repositories/bookmark.js";

export default class BookService {
  #bookmarkRepository: BookmarkRepository;
  #bookRepository: BookRepository;

  constructor(
    bookRepository: BookRepository,
    bookmarkRepository: BookmarkRepository
  ) {
    this.#bookRepository = bookRepository;
    this.#bookmarkRepository = bookmarkRepository;
  }

  createBook(data: NewBook): Book {
    return this.#bookRepository.create(data);
  }

  deleteBook(id: BookId): BookId | undefined {
    const deletedBookId = this.#bookRepository.delete(id);

    if (deletedBookId === undefined) {
      return;
    }

    const bookmarks = this.#bookmarkRepository.listByBookId(deletedBookId);
    bookmarks.forEach((b) => this.#bookmarkRepository.delete(b.id));

    return deletedBookId;
  }

  getBook(id: BookId): Book | undefined {
    return this.#bookRepository.get(id);
  }

  listBooks(): Book[] {
    return this.#bookRepository.list();
  }

  updateBook(id: BookId, data: UpdateBook): Book | undefined {
    return this.#bookRepository.update(id, data);
  }
}
