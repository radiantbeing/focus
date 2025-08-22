import express from "express";

import type { Book } from "../../shared/types.js";

import { BookSchema, NewBookSchema } from "../../shared/validations.js";
import { BOOKS } from "./constants.js";
import BookmarkRepository from "./repositories/bookmark.js";
import { BookmarkService } from "./services/bookmark.js";

const app = express();
const port = 3000;

const store = {
  books: BOOKS
};

const bookmarkRepository = new BookmarkRepository();
const bookmarkService = new BookmarkService(bookmarkRepository);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.get("/", function (req, res) {
  res.send("FOCUS 서버가 작동 중입니다...");
});

app.get("/bookmarks", function (req, res) {
  res.json(bookmarkService.listBookmarks());
});

app.get("/books", function (req, res) {
  res.json(store.books);
});

app.delete("/books/:id", function (req, res) {
  try {
    const id = BookSchema.shape.id.parse(parseInt(req.params.id));
    const bookIndex = store.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      res.status(404).json({ error: "BOOK_NOT_FOUND" });
      return;
    }

    store.books.splice(bookIndex, 1);
    res.status(204).send();
  } catch {
    res.status(400).json({ error: "INVALID_INPUT" });
  }
});

app.get("/books/:id", function (req, res) {
  try {
    const id = BookSchema.shape.id.parse(parseInt(req.params.id));
    const book = store.books.find((book) => book.id === id);

    if (!book) {
      res.status(404).json({ error: "BOOK_NOT_FOUND" });
      return;
    }

    res.json(book);
  } catch {
    res.status(400).json({ error: "INVALID_INPUT" });
  }
});

app.put("/books/:id", function (req, res) {
  try {
    const id = BookSchema.shape.id.parse(parseInt(req.params.id));
    const bookIndex = store.books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      res.status(404).json({ error: "BOOK_NOT_FOUND" });
      return;
    }

    const { author, title } = NewBookSchema.parse(req.body);
    const updatedBook: Book = {
      ...store.books[bookIndex],
      author,
      title
    };

    store.books[bookIndex] = updatedBook;
    res.json(updatedBook);
  } catch {
    res.status(400).json({ error: "INVALID_INPUT" });
  }
});

app.post("/books", function (req, res) {
  try {
    const { author, title } = NewBookSchema.parse(req.body);
    const newBook: Book = {
      author,
      id:
        store.books.length > 0 ? store.books[store.books.length - 1].id + 1 : 0,
      title
    };
    store.books.push(newBook);
    res.status(201).json(newBook);
  } catch {
    res.status(400).json({ error: "INVALID_INPUT" });
  }
});

app.listen(port, function () {
  console.log(
    `서버 애플리케이션이 http://localhost:${port.toString()}/ 에서 작동 중입니다.`
  );
});
