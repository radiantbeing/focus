import express from "express";

import { BookIdSchema, NewBookSchema } from "../../shared/validations.js";
import { ERR_MSG } from "./constants.js";
import BookRepository from "./repositories/book.js";
import BookmarkRepository from "./repositories/bookmark.js";
import BookService from "./services/book.js";
import BookmarkService from "./services/bookmark.js";

const app = express();
const port = 3000;

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);

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
  res.json(bookService.listBooks());
});

app.get("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(parseInt(req.params.id));
    const book = bookService.getBook(id);

    if (book === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(book);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.post("/books", function (req, res) {
  try {
    const bookData = NewBookSchema.parse(req.body);
    const createdBook = bookService.createBook(bookData);
    res.status(201).json(createdBook);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.put("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(parseInt(req.params.id));
    const bookData = NewBookSchema.parse(req.body);
    const updatedBook = bookService.updateBook(id, bookData);

    if (updatedBook === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(updatedBook);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.delete("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(parseInt(req.params.id));
    const deletedBookId = bookService.deleteBook(id);

    if (deletedBookId === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.status(204).send(deletedBookId);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.listen(port, function () {
  console.log(
    `서버 애플리케이션이 http://localhost:${port.toString()}/ 에서 작동 중입니다.`
  );
});
