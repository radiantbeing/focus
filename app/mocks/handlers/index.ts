import { HttpHandler } from 'msw';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from './book-handlers';
import {
  deleteBookmark,
  getBookmark,
  getBookmarks,
  updateBookmark,
} from './bookmark-handler';

const handlers: HttpHandler[] = [
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
  getBookmarks,
  getBookmark,
  deleteBookmark,
  updateBookmark,
];

export { handlers };
