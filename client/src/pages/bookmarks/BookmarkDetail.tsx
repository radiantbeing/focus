import { useBooks } from "@client/features/book/hooks";
import {
  useBookmark,
  useBookmarkIdParam,
  useDeleteBookmark,
} from "@client/features/bookmark/hooks";
import IconButton from "@client/ui/button/IconButton";
import ErrorDisplay from "@client/ui/error/ErrorDisplay";
import Loading from "@client/ui/loading/Loading";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

export default function BookmarkDetail(): React.JSX.Element {
  const bookmarkId = useBookmarkIdParam() ?? -1;

  const { data: books, error: booksError, status: booksStatus } = useBooks();
  const {
    data: bookmark,
    error: bookmarkError,
    status: bookmarkStatus,
  } = useBookmark(bookmarkId);
  const { mutate } = useDeleteBookmark();

  async function handleDeleteClick(): Promise<void> {
    const confirmed = window.confirm("현재 책갈피가 삭제됩니다.");
    if (confirmed) {
      await mutate(bookmarkId);
    }
  }

  if (booksStatus === "error") {
    return <ErrorDisplay error={booksError} />;
  }

  if (bookmarkStatus === "error") {
    return <ErrorDisplay error={bookmarkError} />;
  }

  if (booksStatus === "loading") {
    return <Loading message="도서 목록을 가져오는 중입니다." />;
  }

  if (bookmarkStatus === "loading") {
    return <Loading message="책갈피 정보를 가져오는 중입니다." />;
  }

  return (
    <article>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피 상세</h1>
        </div>
        <menu className="flex gap-x-1">
          <li>
            <IconButton
              icon={<Trash2 size={16} />}
              onClick={handleDeleteClick}
            />
          </li>
          <li>
            <IconButton as="link" icon={<Pencil size={16} />} to="edit" />
          </li>
        </menu>
      </div>
      <div className="mt-4 space-y-5">
        <label className="block">
          <div className="mb-2 font-bold">도서</div>
          <select
            className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={bookmark.bookId.toString()}
            disabled
            key={bookmark.bookId}
            name="bookId"
          >
            {books.map((book) => (
              <option key={book.id} value={book.id.toString()}>
                {book.title} / {book.author}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <div className="mb-2 font-bold">기록일</div>
          <input
            className="block w-full appearance-none border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={bookmark.date.toISOString().substring(0, 10)}
            disabled
            type="date"
          />
        </label>
        <label className="block">
          <div className="mb-2 font-bold">페이지</div>
          <input
            className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={bookmark.page}
            disabled
            min={1}
            name="page"
            step={1}
            type="number"
          />
        </label>
        <label className="block">
          <div className="mb-2 font-bold">요약</div>
          <textarea
            className="block h-40 w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={bookmark.summary}
            disabled
            name="summary"
          />
        </label>
      </div>
    </article>
  );
}
