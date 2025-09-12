import { Play } from "lucide-react";
import React from "react";

import { EXAMPLE_BOOKMARKS, EXAMPLE_BOOKS } from "../../../../shared/examples";
import IconButton from "../../components/IconButton";
import { createBook } from "../../services/book";
import { createBookmark } from "../../services/bookmark";
import {
  exportData,
  purgeBookmarks,
  purgeBooks
} from "../../services/settings";
import { downloadJson } from "../../utils/download";

export default function SettingsList(): React.JSX.Element {
  async function handlePurgeBooks(): Promise<void> {
    if (
      !confirm(
        `• 모든 도서 삭제
• 모든 책갈피 삭제

이 작업은 되돌릴 수 없습니다.
계속하시겠습니까?`
      )
    ) {
      return;
    }
    const deletedBookIds = await purgeBooks();
    const successCount = deletedBookIds.filter((id) => id !== undefined).length;
    alert(`${successCount.toString()}개 도서가 제거되었습니다.`);
  }

  async function handlePurgeBookmarks(): Promise<void> {
    if (
      !confirm(
        `• 모든 책갈피 삭제

이 작업은 되돌릴 수 없습니다.
계속하시겠습니까?`
      )
    ) {
      return;
    }
    const deletedBookmarkIds = await purgeBookmarks();
    const successCount = deletedBookmarkIds.filter(
      (id) => id !== undefined
    ).length;
    alert(`${successCount.toString()}개 책갈피가 제거되었습니다.`);
  }

  async function handleExportData(): Promise<void> {
    const exportedData = await exportData();
    downloadJson(exportedData);
  }

  async function handleAddExamples(): Promise<void> {
    await Promise.all(EXAMPLE_BOOKS.map((book) => createBook(book)));
    await Promise.all(
      EXAMPLE_BOOKMARKS.map((bookmark) => createBookmark(bookmark))
    );
    alert("예제가 추가되었습니다.");
  }

  return (
    <article>
      <header className="mt-1 mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">환경 설정</h1>
      </header>
      <ul className="divide-y-1 divide-gray-300">
        <li className="py-2 first:pt-0">
          <article className="flex items-center justify-between">
            <header>
              <h2 className="font-bold">도서 및 책갈피 초기화</h2>
              <p className="text-sm text-gray-600">
                모든 도서와 관련 책갈피를 삭제합니다.
              </p>
            </header>
            <IconButton icon={<Play size={16} />} onClick={handlePurgeBooks} />
          </article>
        </li>
        <li className="py-2 first:pt-0">
          <article className="flex items-center justify-between">
            <header>
              <h2 className="font-bold">책갈피 초기화</h2>
              <p className="text-sm text-gray-600">모든 책갈피를 삭제합니다.</p>
            </header>
            <IconButton
              icon={<Play size={16} />}
              onClick={handlePurgeBookmarks}
            />
          </article>
        </li>
        <li className="py-2 first:pt-0">
          <article className="flex items-center justify-between">
            <header>
              <h2 className="font-bold">예제 데이터 추가</h2>
              <p className="text-sm text-gray-600">체험용 예제를 추가합니다.</p>
            </header>
            <IconButton icon={<Play size={16} />} onClick={handleAddExamples} />
          </article>
        </li>
        <li className="py-2 first:pt-0">
          <article className="flex items-center justify-between">
            <header>
              <h2 className="font-bold">내보내기</h2>
              <p className="text-sm text-gray-600">
                모든 기록을 JSON 파일로 내보냅니다.
              </p>
            </header>
            <IconButton icon={<Play size={16} />} onClick={handleExportData} />
          </article>
        </li>
      </ul>
    </article>
  );
}
