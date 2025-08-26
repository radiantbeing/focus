import type {
  Book,
  BookId,
  NewBook,
  UpdateBook
} from "../../../shared/types.js";
import type BookRepository from "../repositories/book.js";

export default class BookService {
  #bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.#bookRepository = bookRepository;
  }

  createBook(data: NewBook): Book {
    return this.#bookRepository.create(data);
  }

  deleteBook(id: BookId): BookId | undefined {
    return this.#bookRepository.delete(id);
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
