import invariant from 'tiny-invariant';

import type { BookMutation, BookRecord } from '~/types/book';
import { BookmarkMutation, BookmarkRecord } from '~/types/bookmark';

const fakeBooks = {
  records: {} as Record<string, BookRecord>,

  async getAll(): Promise<BookRecord[]> {
    return Object.keys(fakeBooks.records).map((key) => fakeBooks.records[key]);
  },

  async get(id: string): Promise<BookRecord | null> {
    return fakeBooks.records[id] ?? null;
  },

  async create(values: BookMutation): Promise<BookRecord> {
    const id = values.id ?? Math.random().toString(36).substring(2, 9);
    const newBook = { id, ...values };
    fakeBooks.records[id] = newBook;
    return newBook;
  },

  async set(id: string, values: BookMutation): Promise<BookRecord> {
    const book = await fakeBooks.get(id);
    invariant(book, `${id}에 해당하는 도서가 존재하지 않습니다.`);
    const updatedBook = { ...book, ...values };
    fakeBooks.records[id] = updatedBook;
    return updatedBook;
  },

  destroy(id: string): null {
    delete fakeBooks.records[id];
    return null;
  },
};

const getBooks = async (): Promise<BookRecord[]> => {
  const response = await fetch('https://api.example.com/books');
  const books: BookRecord[] = await response.json();
  return books;
};

const getBook = async (bookId: string): Promise<BookRecord> => {
  const response = await fetch(`https://api.example.com/books/${bookId}`);
  const book: BookRecord = await response.json();
  return book;
};

const createBook = async (mutation: BookMutation): Promise<BookRecord> => {
  const formData = Object.entries(mutation).reduce((formData, [key, value]) => {
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else if (value !== undefined) {
      formData.append(key, value.toString());
    }
    return formData;
  }, new FormData());
  const response = await fetch('https://api.example.com/books', {
    method: 'POST',
    body: formData,
  });
  const createdBook: BookRecord = await response.json();
  return createdBook;
};

const deleteBook = async (bookId: string): Promise<BookRecord> => {
  const response = await fetch(`https://api.example.com/books/${bookId}`, {
    method: 'DELETE',
  });
  const deletedBook: BookRecord = await response.json();
  return deletedBook;
};

const updateBook = async (
  bookId: string,
  mutation: BookMutation
): Promise<BookRecord> => {
  const formData = Object.entries(mutation).reduce((formData, [key, value]) => {
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else if (value !== undefined) {
      formData.append(key, value.toString());
    }
    return formData;
  }, new FormData());
  const response = await fetch(`https://api.example.com/books/${bookId}`, {
    method: 'PUT',
    body: formData,
  });
  const updatedBook: BookRecord = await response.json();
  return updatedBook;
};

const getBookmarks = async (): Promise<BookmarkRecord[]> => {
  const response = await fetch('https://api.example.com/bookmarks');
  const bookmarks: BookmarkRecord[] = await response.json();
  return bookmarks;
};

const getBookmark = async (bookmarkId: string): Promise<BookmarkRecord> => {
  const response = await fetch(
    `https://api.example.com/bookmarks/${bookmarkId}`
  );
  const bookmark: BookmarkRecord = await response.json();
  return bookmark;
};

const deleteBookmark = async (bookmarkId: string): Promise<BookmarkRecord> => {
  const response = await fetch(
    `https://api.example.com/bookmarks/${bookmarkId}`,
    {
      method: 'DELETE',
    }
  );
  const deletedBookmark: BookmarkRecord = await response.json();
  return deletedBookmark;
};

const updateBookmark = async (
  bookmarkId: string,
  mutation: BookmarkMutation
): Promise<BookmarkRecord> => {
  const formData = Object.entries(mutation).reduce((formData, [key, value]) => {
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else if (value !== undefined) {
      formData.append(key, value.toString());
    }
    return formData;
  }, new FormData());
  const response = await fetch(
    `https://api.example.com/bookmarks/${bookmarkId}`,
    {
      method: 'PUT',
      body: formData,
    }
  );
  const updatedBookmark: BookmarkRecord = await response.json();
  return updatedBookmark;
};

export {
  createBook,
  deleteBook,
  deleteBookmark,
  getBook,
  getBookmark,
  getBookmarks,
  getBooks,
  updateBook,
  updateBookmark,
};
