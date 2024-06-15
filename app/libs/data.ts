import invariant from 'tiny-invariant';

import type { BookMutation, BookRecord } from '~/types/book';

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
