import type { BookRecord } from '~/types/book';

/**
 * 지정된 URL에서 도서 목록을 가져옵니다.
 *
 * @param url - 도서를 가져올 URL입니다.
 * @returns BookRecord 객체의 배열로 해결되는 프로미스입니다.
 * @throws HTTP 오류가 발생하거나 도서 목록 검색에 실패한 경우 예외가 발생합니다.
 */
export async function getBooks(url: string): Promise<BookRecord[]> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP 에러가 발생했습니다. ${res.status}`);
    }

    const books: BookRecord[] = await res.json();
    return books;
  } catch (error) {
    console.error('도서 목록 조회에 실패했습니다.', error);
    throw error;
  }
}
