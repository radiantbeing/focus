import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

import type { Book, Bookmark } from "../../../../shared/types";

import { NewBookmarkSchema } from "../../../../shared/validations";
import IconButton from "../../components/IconButton";
import Submit from "../../components/Submit";
import { listBooks } from "../../services/book";
import { getBookmark, updateBookmark } from "../../services/bookmark";
import NotFoundPage from "../NotFound";

export default function BookmarkUpdate(): React.JSX.Element {
  const navigate = useNavigate();
  const { bookmarkId } = useParams();

  const [books, setBooks] = React.useState<Book[] | null>(null);
  const [bookmark, setBookmark] = React.useState<Bookmark | null>(null);

  React.useEffect(
    function () {
      if (bookmarkId === undefined) {
        return;
      }

      let ignore = false;

      listBooks()
        .then(function (books) {
          if (!ignore) {
            setBooks(books);
          }
        })
        .catch(function () {
          if (!ignore) {
            setBooks(null);
          }
        });

      getBookmark(parseInt(bookmarkId))
        .then(function (bookmark) {
          if (!ignore) {
            setBookmark(bookmark);
          }
        })
        .catch(function () {
          {
            if (!ignore) {
              setBookmark(null);
            }
          }
        });

      return function (): void {
        ignore = true;
      };
    },
    [bookmarkId]
  );

  async function handleUndoButtonClick(): Promise<void> {
    await navigate(-1);
  }

  async function handleSubmit(formData: FormData): Promise<void> {
    if (bookmarkId === undefined) {
      return;
    }

    const bookId = formData.get("bookId");
    const page = formData.get("page");
    const summary = formData.get("summary");

    if (
      typeof bookId !== "string" ||
      typeof page !== "string" ||
      typeof summary !== "string"
    ) {
      return;
    }

    const inputs = NewBookmarkSchema.parse({
      bookId: parseInt(bookId),
      page: parseInt(page),
      summary
    });

    const updatedBookmark = await updateBookmark(parseInt(bookmarkId), inputs);
    setBookmark(updatedBookmark);
    await navigate(`/bookmarks/${updatedBookmark.id.toString()}`);
  }

  if (bookmarkId === undefined) {
    return <NotFoundPage />;
  }

  if (books === null || bookmark === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <form action={handleSubmit}>
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
