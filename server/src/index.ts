import express from "express";

import {
  BookIdSchema,
  BookmarkIdSchema,
  NewBookmarkSchema,
  NewBookSchema,
  UpdateBookmarkSchema
} from "../../shared/validations.js";
import { ERR_MSG } from "./constants.js";
import BookRepository from "./repositories/book.js";
import BookmarkRepository from "./repositories/bookmark.js";
import BookService from "./services/book.js";
import BookmarkService from "./services/bookmark.js";

const app = express();
const port = 3532;

const bookRepository = new BookRepository();
const bookmarkRepository = new BookmarkRepository();

const bookService = new BookService(bookRepository, bookmarkRepository);
const bookmarkService = new BookmarkService(bookmarkRepository);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

// 인덱스:

app.get("/", function (req, res) {
  res.send("FOCUS 서버가 작동 중입니다...");
});

// 도서:

app.delete("/books", function (req, res) {
  const deletedBookIds = bookService.deleteBooks();
  if (deletedBookIds.some((id) => id === undefined)) {
    res.status(207).json(deletedBookIds);
  } else {
    res.status(200).json(deletedBookIds);
  }
});

app.get("/books", function (req, res) {
  res.json(bookService.listBooks());
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

app.delete("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(req.params.id);
    const deletedBookId = bookService.deleteBook(id);

    if (deletedBookId === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.status(200).json(deletedBookId);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.get("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(req.params.id);
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

app.put("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(req.params.id);
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

// 책갈피:

app.delete("/bookmarks", function (req, res) {
  const deletedBookmarkIds = bookmarkService.deleteBookmarks();
  if (deletedBookmarkIds.some((id) => id === undefined)) {
    res.status(207).json(deletedBookmarkIds);
  } else {
    res.status(200).json(deletedBookmarkIds);
  }
});

app.get("/bookmarks", function (req, res) {
  res.json(bookmarkService.listBookmarks());
});

app.delete("/bookmarks/:bookmarkId", function (req, res) {
  try {
    const id = BookmarkIdSchema.parse(req.params.bookmarkId);
    const deletedBookmarkId = bookmarkService.deleteBookmark(id);

    if (deletedBookmarkId === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.status(200).json(deletedBookmarkId);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.get("/bookmarks/:bookmarkId", function (req, res) {
  try {
    const bookmarkId = BookmarkIdSchema.parse(req.params.bookmarkId);
    const bookmark = bookmarkService.getBookmark(bookmarkId);

    if (bookmark === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(bookmark);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.post("/bookmarks", function (req, res) {
  try {
    const bookmarkData = NewBookmarkSchema.parse(req.body);
    const createdBookmark = bookmarkService.createBookmark(bookmarkData);
    res.status(201).json(createdBookmark);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.put("/bookmarks/:bookmarkId", function (req, res) {
  try {
    const bookmarkId = BookIdSchema.parse(req.params.bookmarkId);
    const bookmarkData = UpdateBookmarkSchema.parse(req.body);
    const updatedBookmark = bookmarkService.updateBookmark(
      bookmarkId,
      bookmarkData
    );

    if (updatedBookmark === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(updatedBookmark);
  } catch {
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

app.listen(port, function () {
  console.log(
    `서버 애플리케이션이 http://localhost:${port.toString()}/ 에서 작동 중입니다.`
  );
});
