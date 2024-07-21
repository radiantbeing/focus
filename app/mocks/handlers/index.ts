import { HttpHandler } from 'msw';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from './book-handlers';
import { deleteBookmark, getBookmark, getBookmarks } from './bookmark-handler';

const handlers: HttpHandler[] = [
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
  getBookmarks,
  getBookmark,
  deleteBookmark,
];

export { handlers };
