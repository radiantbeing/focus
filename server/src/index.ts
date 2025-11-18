import express from "express";
import path from "node:path";

import {
  BookIdSchema,
  BookmarkIdSchema,
  NewBookmarkSchema,
  NewBookSchema,
  UpdateBookmarkSchema,
} from "../../shared/src/validations.js";
import { ERR_MSG } from "./constants.js";
import BookRepository from "./repositories/book.js";
import BookmarkRepository from "./repositories/bookmark.js";
import BookService from "./services/book.js";
import BookmarkService from "./services/bookmark.js";

const app = express();
const router = express.Router();

const __dirname = import.meta.dirname;

const bookRepository = new BookRepository();
const bookmarkRepository = new BookmarkRepository();

const bookService = new BookService(bookRepository, bookmarkRepository);
const bookmarkService = new BookmarkService(bookmarkRepository);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/api", router);

// 도서:

router.delete("/books", function (req, res) {
  const deletedBooks = bookService.deleteBooks();
  res.status(200).json(deletedBooks);
});

router.get("/books", function (req, res) {
  res.json(bookService.listBooks());
});

router.post("/books", function (req, res) {
  try {
    const bookData = NewBookSchema.parse(req.body);
    const createdBook = bookService.createBook(bookData);
    res.status(201).json(createdBook);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

router.delete("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(req.params.id);
    const deletedBookId = bookService.deleteBook(id);

    if (deletedBookId === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.status(200).json(deletedBookId);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

router.get("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(req.params.id);
    const book = bookService.getBook(id);

    if (book === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

router.put("/books/:id", function (req, res) {
  try {
    const id = BookIdSchema.parse(req.params.id);
    const bookData = NewBookSchema.parse(req.body);
    const updatedBook = bookService.updateBook(id, bookData);

    if (updatedBook === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

// 책갈피:

router.delete("/bookmarks", function (req, res) {
  const deletedBookmarks = bookmarkService.deleteBookmarks();
  res.status(200).json(deletedBookmarks);
});

router.get("/bookmarks", function (req, res) {
  res.json(bookmarkService.listBookmarks());
});

router.delete("/bookmarks/:bookmarkId", function (req, res) {
  try {
    const id = BookmarkIdSchema.parse(req.params.bookmarkId);
    const deletedBookmarkId = bookmarkService.deleteBookmark(id);

    if (deletedBookmarkId === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.status(200).json(deletedBookmarkId);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

router.get("/bookmarks/:bookmarkId", function (req, res) {
  try {
    const bookmarkId = BookmarkIdSchema.parse(req.params.bookmarkId);
    const bookmark = bookmarkService.getBookmark(bookmarkId);

    if (bookmark === undefined) {
      res.status(404).json({ error: ERR_MSG.ITEM_NOT_FOUND });
      return;
    }

    res.json(bookmark);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

router.post("/bookmarks", function (req, res) {
  try {
    const bookmarkData = NewBookmarkSchema.parse(req.body);
    const createdBookmark = bookmarkService.createBookmark(bookmarkData);
    res.status(201).json(createdBookmark);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

router.put("/bookmarks/:bookmarkId", function (req, res) {
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
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: ERR_MSG.INVALID_INPUT });
  }
});

// 설정:

router.get("/settings/export", function (req, res) {
  const bookmarks = bookmarkService.listBookmarks();
  const books = bookService.listBooks();
  res.status(200).json({ bookmarks, books });
});

// Catch-All:

app.get("/{*splat}", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

const port = 3532;

app.listen(port, function () {
  console.log(
    `서버 애플리케이션이 http://127.0.0.1:${port.toString()}/ 에서 작동 중입니다.`
  );
});
