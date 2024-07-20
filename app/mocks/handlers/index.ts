import { HttpHandler } from 'msw';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from './book-handlers';
import { getBookmarks } from './bookmark-handler';

const handlers: HttpHandler[] = [
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
  getBookmarks,
];

export { handlers };
