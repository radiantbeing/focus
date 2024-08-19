import type { DefaultBodyType, PathParams } from 'msw';
import { http, HttpResponse } from 'msw';

import type { BookRecord } from '~/types/book';
import type { BookmarkMutation, BookmarkRecord } from '~/types/bookmark';

import { allBooks } from './book-handlers';

const TEMP_IMAGE_URL = 'https://picsum.photos/350/600';

const generateId = () => Math.random().toString(36).substring(2, 9);

const allBookmarks: Map<string, BookmarkRecord> = new Map();

type GetBookmarksResponseBody = BookmarkRecord[];
/**
 * HTTP GET 요청에 의해 책갈피 목록을 반환하는 핸들러 함수입니다.
 *
 * @returns {Promise<GetBookmarksResponseBody>} 책갈피 목록을 포함하는 Promise 객체
 */
const getBookmarks = http.get<
  PathParams,
  DefaultBodyType,
  GetBookmarksResponseBody,
  'https://api.example.com/bookmarks'
>('https://api.example.com/bookmarks', () =>
  HttpResponse.json(Array.from(allBookmarks.values()))
);

type GetBookmarkParams = {
  bookmarkId: string;
};
type GetBookmarkResponseBody = BookmarkRecord;
const getBookmark = http.get<
  GetBookmarkParams,
  DefaultBodyType,
  GetBookmarkResponseBody,
  'https://api.example.com/bookmark/:bookmarkId'
>('https://api.example.com/bookmark/:bookmarkId', ({ params }) => {
  const { bookmarkId } = params;
  const bookmark = allBookmarks.get(bookmarkId);
  return HttpResponse.json(bookmark);
});

type CreateBookmarkRequestBody = BookmarkMutation;
type CreateBookmarkResponseBody = BookmarkRecord;
const createBookmark = http.post<
  PathParams,
  CreateBookmarkRequestBody,
  CreateBookmarkResponseBody,
  'https://api.example.com/bookmark'
>('https://api.example.com/bookmark', async ({ request }) => {
  const formData = await request.formData();
  const mutation: BookmarkMutation = {
    id: formData.get('id')?.toString(),
    bookId: formData.get('bookId')?.toString(),
    page: Number(formData.get('page')),
    content: formData.get('content')?.toString(),
    thumbnailImage: formData.get('thumbnailImage') as File | undefined,
  };

  const date = new Date();
  const newBookmark: BookmarkRecord = {
    id: mutation.id ?? generateId(),
    page: mutation.page,
    content: mutation.content,
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    book: allBooks.get(mutation.bookId ?? 'q26yxx9') as BookRecord,
  };

  if (mutation.thumbnailImage) {
    newBookmark.thumbnailImageUrl = TEMP_IMAGE_URL;
  }

  allBookmarks.set(newBookmark.id, newBookmark);
  return HttpResponse.json(newBookmark, { status: 201 });
});

type DeleteBookmarkParams = {
  bookmarkId: string;
};
type DeleteBookResponseBody = BookmarkRecord | null;
const deleteBookmark = http.delete<
  DeleteBookmarkParams,
  DefaultBodyType,
  DeleteBookResponseBody,
  'https://api.example.com/bookmark/:bookmarkId'
>('https://api.example.com/bookmark/:bookmarkId', ({ params }) => {
  const { bookmarkId } = params;
  const deletedBookmark = allBookmarks.get(bookmarkId);
  if (!deletedBookmark) {
    return HttpResponse.json(null, { status: 404 });
  }
  allBookmarks.delete(bookmarkId);
  return HttpResponse.json(deletedBookmark);
});

type UpdateBookmarkParams = {
  bookmarkId: string;
};
type UpdateBookmarkRequestBody = BookmarkMutation;
type UpdateBookmarkResponseBody = BookmarkRecord;
const updateBookmark = http.put<
  UpdateBookmarkParams,
  UpdateBookmarkRequestBody,
  UpdateBookmarkResponseBody,
  'https://api.example.com/bookmark/:bookmarkId'
>(
  'https://api.example.com/bookmark/:bookmarkId',
  async ({ params, request }) => {
    const { bookmarkId } = params;
    const bookmark = allBookmarks.get(bookmarkId);
    if (!bookmark) {
      return HttpResponse.json(null, { status: 404 });
    }
    const formData = await request.formData();
    const mutation: BookmarkMutation = {
      bookId: formData.get('bookId')?.toString() ?? '',
      page: Number(formData.get('page')) ?? 0,
      content: formData.get('content')?.toString() ?? '',
      thumbnailImage: formData.get('thumbnailImage') as File | undefined,
    };

    const updatedBookmark: BookmarkRecord = {
      ...bookmark,
      ...mutation,
    };

    if (mutation.thumbnailImage) {
      updatedBookmark.thumbnailImageUrl = TEMP_IMAGE_URL;
    }

    allBookmarks.set(bookmarkId, updatedBookmark);
    return HttpResponse.json(updatedBookmark);
  }
);

[
  {
    id: 'fwahol1',
    page: 271,
    content:
      '돈키호테는 평범한 사물들을 기사도의 망상 속에서 위대한 모험과 위험으로 착각하며, 자기 자신을 용맹한 기사로 여기고 세상을 정의롭게 만들기 위해 떠난다.',
    date: '2024-08-21',
    thumbnailImageUrl: TEMP_IMAGE_URL,
    book: {
      id: 'y4bijkr',
      title: '돈키호테',
      author: '미겔 데 세르반테스',
      coverImageUrl: TEMP_IMAGE_URL,
    },
  },
  {
    id: 'abthi32',
    page: 182,
    content:
      '개츠비는 과거의 사랑을 되찾기 위해 엄청난 부를 쌓고 사치스러운 파티를 열지만, 결국 그 꿈은 허망하게 무너지고 만다.',
    date: '2024-08-21',
    thumbnailImageUrl: TEMP_IMAGE_URL,
    book: {
      id: 'skhl9s4',
      title: '위대한 개츠비',
      author: 'F. 스콧 피츠제럴드',
      coverImageUrl: TEMP_IMAGE_URL,
    },
  },
  {
    id: 'gfh3fof',
    page: 53,
    content:
      '홀든 콜필드는 뉴욕에서의 방황과 고난을 겪으면서 성숙의 과정을 겪고, 결국 순수함과 진정성을 지키려는 노력 속에서 자신의 정체성을 찾아간다.',
    date: '2024-07-11',
    thumbnailImageUrl: TEMP_IMAGE_URL,
    book: {
      id: 'ijdnejy',
      title: '호밀밭의 파수꾼',
      author: '제롬 데이비드 샐린저',
      coverImageUrl: TEMP_IMAGE_URL,
    },
  },
  {
    id: 'z3jkjgt',
    page: 63,
    content:
      '로디오너 루스티코프는 자신이 처한 가난과 절망에서 벗어나기 위해 살인을 저지르지만, 그로 인한 죄책감과 내적 갈등에 시달리며 결국 자신의 죄를 인정하고 구속의 길을 선택한다.',
    date: '2024-07-11',
    book: {
      id: '5xk86ni',
      title: '죄와 벌',
      author: '표도르 도스토옙스키',
      coverImageUrl: TEMP_IMAGE_URL,
    },
  },
].forEach((bookmark) => {
  allBookmarks.set(bookmark.id, bookmark);
});

export {
  createBookmark,
  deleteBookmark,
  getBookmark,
  getBookmarks,
  updateBookmark,
};
