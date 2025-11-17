import type {
  Book,
  BookId,
  NewBook,
  UpdateBook,
} from "../../../shared/src/types.js";

import { getDbInstance } from "../db.js";

const db = getDbInstance();

export default class BookRepository {
  create(book: NewBook): Book {
    const createBookStatement = db.prepare<NewBook, Book>(
      `
      INSERT INTO books (author, title)
      VALUES (@author, @title)
      RETURNING *;
      `
    );

    const createdBook = createBookStatement.get(book);
    if (createdBook === undefined) {
      throw new Error("데이터베이스에 도서가 추가되지 않았습니다.");
    }
    return createdBook;
  }

  delete(id: BookId): Book | undefined {
    const deleteBookStatement = db.prepare<[BookId], Book>(
      "DELETE FROM books WHERE id = ? RETURNING *"
    );

    const deletedBook = deleteBookStatement.get(id);
    return deletedBook;
  }

  deleteAll(): Book[] {
    const deleteAllBooksStatement = db.prepare<[], Book>(
      "DELETE FROM books RETURNING *"
    );

    const deletedBooks = deleteAllBooksStatement.all();
    return deletedBooks;
  }

  get(id: BookId): Book | undefined {
    const getBookStatement = db.prepare<[BookId], Book>(
      "SELECT * FROM books WHERE id = ?;"
    );

    const book = getBookStatement.get(id);
    return book;
  }

  list(): Book[] {
    const selectBooksStatement = db.prepare<[], Book>("SELECT * FROM books;");

    const books = selectBooksStatement.all();
    return books;
  }

  update(id: BookId, data: UpdateBook): Book | undefined {
    const updateBookStatement = db.prepare<UpdateBook & { id: BookId }, Book>(
      `
      UPDATE books
      SET
        author = @author,
        title = @title
      WHERE id = @id
      RETURNING *
      `
    );

    const updatedBook = updateBookStatement.get({
      author: data.author,
      id,
      title: data.title,
    });
    return updatedBook;
  }
}
