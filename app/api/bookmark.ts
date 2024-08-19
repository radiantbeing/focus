import { BookmarkRecord } from '~/types/bookmark';

/**
 * 지정된 URL에서 책갈피를 가져옵니다.
 *
 * @param url - 책갈피를 가져올 URL입니다.
 * @returns BookmarkRecord 객체의 배열로 해결되는 프로미스입니다.
 * @throws HTTP 오류가 발생하거나 책갈피 검색에 실패한 경우 예외가 발생합니다.
 */
export async function getBookmarks(url: string): Promise<BookmarkRecord[]> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP 에러가 발생했습니다. ${res.status}`);
    }

    const bookmarks: BookmarkRecord[] = await res.json();
    return bookmarks;
  } catch (error) {
    console.error('책갈피 목록 조회에 실패했습니다.', error);
    throw error;
  }
}
