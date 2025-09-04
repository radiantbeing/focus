import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

import ErrorDisplay from "../../components/ErrorDisplay";
import IconButton from "../../components/IconButton";
import Loading from "../../components/Loading";
import Submit from "../../components/Submit";
import useBooks from "../../hooks/book/use-books";
import useBookmark from "../../hooks/bookmark/use-bookmark";
import useUpdateBookmark from "../../hooks/bookmark/use-update-bookmark";

export default function BookmarkUpdate(): React.JSX.Element {
  const navigate = useNavigate();
  const { bookmarkId } = useParams();

  const { books, error: booksError, loading: booksLoading } = useBooks();
  const {
    bookmark,
    error: bookmarkError,
    loading: bookmarkLoading
  } = useBookmark(bookmarkId === undefined ? null : parseInt(bookmarkId));
  const { handleUpdate } = useUpdateBookmark(
    bookmarkId === undefined ? null : parseInt(bookmarkId)
  );

  async function handleUndoButtonClick(): Promise<void> {
    await navigate(-1);
  }

  if (booksError !== null) {
    return <ErrorDisplay error={booksError} />;
  }

  if (bookmarkError !== null) {
    return <ErrorDisplay error={bookmarkError} />;
  }

  if (booksLoading) {
    return <Loading text="도서 목록을 가져오는 중입니다." />;
  }

  if (bookmarkLoading) {
    return <Loading text="책갈피 정보를 가져오는 중입니다." />;
  }

  if (bookmark === null) {
    return <ErrorDisplay message="책갈피를 찾을 수 없습니다." />;
  }

  return (
    <form action={handleUpdate}>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피 상세</h1>
        </div>
        <div className="flex gap-x-1">
          <IconButton
            icon={<Undo2 size={16} />}
            onClick={handleUndoButtonClick}
            type="button"
          />
          <Submit />
        </div>
      </div>
      <article>
        <div className="mt-4 space-y-5">
          <label className="block">
            <div className="mb-2 font-bold">도서</div>
            <select
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              defaultValue={bookmark.bookId}
              key={bookmark.bookId}
              name="bookId"
            >
              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title} / {book.author}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <div className="mb-2 font-bold">기록일</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
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
              name="summary"
            />
          </label>
        </div>
      </article>
    </form>
  );
}
