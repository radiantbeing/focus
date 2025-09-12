import type BetterSqlite3 from "better-sqlite3";

import Database from "better-sqlite3";

const db = new Database(":memory:");
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author TEXT NOT NULL,
  title TEXT NOT NULL
);
`);
db.exec(`
CREATE TABLE IF NOT EXISTS bookmarks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bookId INTEGER,
  date TEXT NOT NULL,
  page INTEGER NOT NULL,
  summary TEXT,
  FOREIGN KEY (bookId) REFERENCES books (id)
);
`);

export function getDbInstance(): BetterSqlite3.Database {
  return db;
}
