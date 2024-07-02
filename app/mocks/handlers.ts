import type { HttpHandler } from 'msw';
import { http, HttpResponse } from 'msw';

import type { BookRecord } from '~/types/book';

const initialBooks: Readonly<BookRecord>[] = [
  {
    id: 'q26yxx9',
    title: '오디세이아',
    author: '호메로스',
    coverImageUrl: 'https://placehold.co/400x600',
  },
  {
    id: 'y4bijkr',
    title: '돈키호테',
    author: '미겔 데 세르반테스',
    coverImageUrl: 'https://placehold.co/400x600',
  },
  {
    id: 'skhl9s4',
    title: '위대한 개츠비',
    author: 'F. 스콧 피츠제럴드',
    coverImageUrl: 'https://placehold.co/400x600',
  },
  {
    id: '5xk86ni',
    title: '죄와 벌',
    author: '표도르 도스토옙스키',
    coverImageUrl: 'https://placehold.co/400x600',
  },
  {
    id: 'ijdnejy',
    title: '호밀밭의 파수꾼',
    author: '제롬 데이비드 샐린저',
    coverImageUrl: 'https://placehold.co/400x600',
  },
];

const createBookMap = (
  books: ReadonlyArray<BookRecord>
): Map<string, BookRecord> => {
  const bookMap = new Map();
  books.forEach((book) => {
    bookMap.set(book.id, book);
  });
  return bookMap;
};

const allBooks = createBookMap(initialBooks);

const handlers: HttpHandler[] = [
  http.get('https://api.example.com/books', () => {
    return HttpResponse.json(Array.from(allBooks.values()));
  }),
];

export { handlers };
