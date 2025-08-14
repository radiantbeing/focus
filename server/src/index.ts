import express from "express";

import type { Book } from "../../shared/types.js";

import { NewBookSchema } from "../../shared/validations.js";
import { BOOKMARKS, BOOKS } from "./constants.js";

const app = express();
const port = 3000;

const store = {
  bookmarks: BOOKMARKS,
  books: BOOKS
};

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
  res.json(store.bookmarks);
});

app.get("/books", function (req, res) {
  res.json(store.books);
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
    res.json(newBook);
  } catch {
    res.status(400).json({ error: "INVALID_INPUT" });
  }
});

app.listen(port, function () {
  console.log(
    `서버 애플리케이션이 http://localhost:${port.toString()}/ 에서 작동 중입니다.`
  );
});
