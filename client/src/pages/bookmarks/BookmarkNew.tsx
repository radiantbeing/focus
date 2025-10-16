import { useBooks } from "@client/features/book/hooks";
import useCreateBookmark from "@client/features/bookmark/hooks/use-create-bookmark";
import ErrorDisplay from "@client/ui/error/ErrorDisplay";
import Submit from "@client/ui/form/Submit";
import Loading from "@client/ui/loading/Loading";
import React from "react";

export default function BookmarkNew(): React.JSX.Element {
  const { handleCreate } = useCreateBookmark();
  const { data: books, error, status } = useBooks();

  if (status === "error") {
    return <ErrorDisplay error={error} />;
  }

  if (status === "loading") {
    return <Loading message="도서 목록을 가져오는 중입니다." />;
  }

  return (
    <form action={handleCreate}>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피 추가</h1>
        </div>
        <Submit />
      </div>
      <article>
        <div className="mt-4 space-y-5">
          <label className="block">
            <div className="mb-2 font-bold">도서</div>
            <select
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              name="bookId"
              required
            >
              {books.map((book) => (
                <option key={book.id} value={book.id.toString()}>
                  {book.title} / {book.author}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <div className="mb-2 font-bold">페이지</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              min={1}
              name="page"
              required
              step={1}
              type="number"
            />
          </label>
          <label className="block">
            <div className="mb-2 font-bold">요약</div>
            <textarea
              className="block h-40 w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              name="summary"
            />
          </label>
        </div>
      </article>
    </form>
  );
}
