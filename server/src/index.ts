import express from "express";

import { BOOKMARKS, BOOKS } from "./constants.js";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", function (req, res) {
  res.send("FOCUS 서버가 작동 중입니다...");
});

app.get("/books", function (req, res) {
  res.json(BOOKS);
});

app.get("/bookmarks", function (req, res) {
  res.json(BOOKMARKS);
});

app.listen(port, function () {
  console.log(
    `서버 애플리케이션이 http://localhost:${port.toString()}/ 에서 작동 중입니다.`
  );
});
