/**
 * @deprecated 이 파일은 더 이상 사용되지 않으며, 함수들은 리팩토링되어 `/app/api` 경로로 이동됩니다.
 */
import type { BookMutation, BookRecord } from '~/types/book';
import { BookmarkMutation, BookmarkRecord } from '~/types/bookmark';

const { FOCUS_API_URL } = process.env;

const getBook = async (bookId: string): Promise<BookRecord> => {
  const response = await fetch(`${FOCUS_API_URL}/book/${bookId}`);
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
  const response = await fetch(`${FOCUS_API_URL}/book`, {
    method: 'POST',
    body: formData,
  });
  const createdBook: BookRecord = await response.json();
  return createdBook;
};

const deleteBook = async (bookId: string): Promise<BookRecord> => {
  const response = await fetch(`${FOCUS_API_URL}/book/${bookId}`, {
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
  const response = await fetch(`${FOCUS_API_URL}/book/${bookId}`, {
    method: 'PUT',
    body: formData,
  });
  const updatedBook: BookRecord = await response.json();
  return updatedBook;
};

const getBookmark = async (bookmarkId: string): Promise<BookmarkRecord> => {
  const response = await fetch(`${FOCUS_API_URL}/bookmark/${bookmarkId}`);
  const bookmark: BookmarkRecord = await response.json();
  return bookmark;
};

const createBookmark = async (
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
  const response = await fetch(`${FOCUS_API_URL}/bookmark`, {
    method: 'POST',
    body: formData,
  });
  const createdBook: BookmarkRecord = await response.json();
  return createdBook;
};

const deleteBookmark = async (bookmarkId: string): Promise<BookmarkRecord> => {
  const response = await fetch(`${FOCUS_API_URL}/bookmark/${bookmarkId}`, {
    method: 'DELETE',
  });
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
  const response = await fetch(`${FOCUS_API_URL}/bookmark/${bookmarkId}`, {
    method: 'PUT',
    body: formData,
  });
  const updatedBookmark: BookmarkRecord = await response.json();
  return updatedBookmark;
};

export {
  createBook,
  createBookmark,
  deleteBook,
  deleteBookmark,
  getBook,
  getBookmark,
  updateBook,
  updateBookmark,
};
