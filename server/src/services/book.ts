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

  deleteBook(id: BookId): Book | undefined {
    const bookmarks = this.#bookmarkRepository.listByBookId(id);
    bookmarks.forEach((b) => this.#bookmarkRepository.delete(b.id));

    const deletedBook = this.#bookRepository.delete(id);
    return deletedBook;
  }

  deleteBooks(): Book[] {
    this.#bookmarkRepository.deleteAll();
    const deletedBookIds = this.#bookRepository.deleteAll();
    return deletedBookIds;
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
