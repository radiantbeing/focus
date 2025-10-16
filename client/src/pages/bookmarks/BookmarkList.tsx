import type { Book, BookId } from "@shared/types";

import { useBooks } from "@client/features/book/hooks";
import { useBookmarks } from "@client/features/bookmark/hooks";
import IconButton from "@client/ui/button/IconButton";
import ErrorDisplay from "@client/ui/error/ErrorDisplay";
import Loading from "@client/ui/loading/Loading";
import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function BookmarkList(): React.JSX.Element {
  const { data: books, error: booksError, status: booksStatus } = useBooks();
  const {
    data: bookmarks,
    error: bookmarksError,
    status: bookmarksStatus,
  } = useBookmarks();

  function getBookById(id: BookId): Book | undefined {
    return books?.find((b) => b.id === id);
  }

  if (booksStatus === "error") {
    return <ErrorDisplay error={booksError} />;
  }

  if (bookmarksStatus === "error") {
    return <ErrorDisplay error={bookmarksError} />;
  }

  if (booksStatus === "loading") {
    return <Loading message="도서 목록을 가져오는 중입니다." />;
  }

  if (bookmarksStatus === "loading") {
    return <Loading message="도서 목록을 가져오는 중입니다." />;
  }

  return (
    <>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피</h1>
          <div className="text-xs text-gray-600">{bookmarks.length}매</div>
        </div>
        <div className="flex gap-x-1">
          <IconButton as="link" icon={<Plus size={16} />} to="/bookmarks/new" />
        </div>
      </div>
      <article>
        <ul className="divide-y-1 divide-gray-300">
          {bookmarks
            .toSorted((a, b) => b.date.getTime() - a.date.getTime())
            .map(({ bookId, date, id, page, summary }) => (
              <li className="py-2 first:pt-0" key={id}>
                <Link to={`/bookmarks/${id.toString()}`}>
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-x-1">
                      <h2 className="font-bold">
                        {getBookById(bookId)?.title}
                      </h2>
                      <span className="text-xs text-gray-600">p.{page}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">
                        {`${date.getFullYear().toString()}년 ${(date.getMonth() + 1).toString()}월 ${date.getDate().toString()}일`}
                      </span>
                    </div>
                  </div>
                  <div className="truncate text-sm text-gray-600">
                    {summary}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        {bookmarks.length === 0 && (
          <p className="text-gray-600">
            읽고 있는{" "}
            <Link className="underline" to="/books/new">
              도서를 추가
            </Link>
            하고 첫 번째 책갈피를 만들어보세요.
          </p>
        )}
      </article>
    </>
  );
}
