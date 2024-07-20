import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw';

import { BookMutation, BookMutationWithId, BookRecord } from '~/types/book';

const TEMP_IMAGE_URL = 'https://picsum.photos/350/600';

const generateId = () => Math.random().toString(36).substring(2, 9);

const allBooks: Map<string, BookRecord> = new Map();

type GetBooksResponseBody = BookRecord[];
const getBooks = http.get<
  PathParams,
  DefaultBodyType,
  GetBooksResponseBody,
  'https://api.example.com/books'
>('https://api.example.com/books', () => {
  return HttpResponse.json(Array.from(allBooks.values()));
});

type GetBookParams = {
  bookId: string;
};
type GetBookResponseBody = BookRecord;
const getBook = http.get<
  GetBookParams,
  DefaultBodyType,
  GetBookResponseBody,
  'https://api.example.com/books/:bookId'
>('https://api.example.com/books/:bookId', ({ params }) => {
  const { bookId } = params;
  const book = allBooks.get(bookId);
  return HttpResponse.json(book);
});

type CreateBookRequestBody = BookMutation;
type CreateBookResponseBody = BookRecord;
const createBook = http.post<
  PathParams,
  CreateBookRequestBody,
  CreateBookResponseBody
>('https://api.example.com/books', async ({ request }) => {
  const formData = await request.formData();
  const mutation: BookMutationWithId = {
    id: formData.get('id')?.toString() ?? generateId(),
    title: formData.get('title')?.toString() ?? '',
    author: formData.get('author')?.toString() ?? '',
    coverImage: formData.get('coverImage') as File | undefined,
  };

  const newBook: BookRecord = {
    id: mutation.id,
    title: mutation.title,
    author: mutation.author,
  };

  if (mutation.coverImage) {
    newBook.coverImageUrl = TEMP_IMAGE_URL;
  }

  allBooks.set(newBook.id, newBook);
  return HttpResponse.json(newBook, { status: 201 });
});

type DeleteBookParams = {
  bookId: string;
};
type DeleteBookResponseBody = BookRecord | null;
const deleteBook = http.delete<
  DeleteBookParams,
  DefaultBodyType,
  DeleteBookResponseBody
>('https://api.example.com/books/:bookId', ({ params }) => {
  const { bookId } = params;
  const deletedBook = allBooks.get(bookId);
  if (!deletedBook) {
    return HttpResponse.json(null, { status: 404 });
  }
  allBooks.delete(bookId);
  return HttpResponse.json(deletedBook);
});

type UpdateBookParams = {
  bookId: string;
};
type UpdateBookRequestBody = BookMutation;
type UpdateBookResponseBody = BookRecord;
const updateBook = http.put<
  UpdateBookParams,
  UpdateBookRequestBody,
  UpdateBookResponseBody
>('https://api.example.com/books/:bookId', async ({ params, request }) => {
  const { bookId } = params;
  const book = allBooks.get(bookId);
  if (!book) {
    return HttpResponse.json(null, { status: 404 });
  }
  const formData = await request.formData();
  const mutation: BookMutation = {
    title: formData.get('title')?.toString() ?? '',
    author: formData.get('author')?.toString() ?? '',
    coverImage: formData.get('coverImage') as File | undefined,
  };

  const updatedBook: BookRecord = {
    ...book,
    title: mutation.title,
    author: mutation.author,
  };

  if (mutation.coverImage) {
    updatedBook.coverImageUrl = TEMP_IMAGE_URL;
  }

  allBooks.set(bookId, updatedBook);
  return HttpResponse.json(updatedBook);
});

[
  {
    id: 'q26yxx9',
    title: '오디세이아',
    author: '호메로스',
    coverImageUrl: TEMP_IMAGE_URL,
  },
  {
    id: 'y4bijkr',
    title: '돈키호테',
    author: '미겔 데 세르반테스',
    coverImageUrl: TEMP_IMAGE_URL,
  },
  {
    id: 'skhl9s4',
    title: '위대한 개츠비',
    author: 'F. 스콧 피츠제럴드',
    coverImageUrl: TEMP_IMAGE_URL,
  },
  {
    id: '5xk86ni',
    title: '죄와 벌',
    author: '표도르 도스토옙스키',
    coverImageUrl: TEMP_IMAGE_URL,
  },
  {
    id: 'ijdnejy',
    title: '호밀밭의 파수꾼',
    author: '제롬 데이비드 샐린저',
    coverImageUrl: TEMP_IMAGE_URL,
  },
].forEach((book) => {
  allBooks.set(book.id, book);
});

export { createBook, deleteBook, getBook, getBooks, updateBook };
