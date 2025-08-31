import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router";

import type { Book, Bookmark } from "../../../../shared/types";

import IconFrame from "../../components/IconFrame";
import { listBooks } from "../../services/book";
import { deleteBookmark, getBookmark } from "../../services/bookmark";
import NotFoundPage from "../NotFound";

export default function BookmarkDetail(): React.JSX.Element {
  const navigate = useNavigate();
  const { bookmarkId } = useParams();

  const [bookmark, setBookmark] = React.useState<Bookmark | null>(null);
  const [books, setBooks] = React.useState<Book[] | null>(null);

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

  async function handleDeleteClick(): Promise<void> {
    if (bookmarkId === undefined) {
      return;
    }

    await deleteBookmark(parseInt(bookmarkId));
    await navigate("/bookmarks");
  }

  if (bookmarkId === undefined) {
    return <NotFoundPage />;
  }

  if (books === null || bookmark === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <article>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피 상세</h1>
        </div>
        <menu className="flex gap-x-1">
          <li>
            <IconFrame>
              <button onClick={handleDeleteClick}>
                <Trash2 size={16} />
              </button>
            </IconFrame>
          </li>
          <li>
            <IconFrame>
              <Link to="edit">
                <Pencil size={16} />
              </Link>
            </IconFrame>
          </li>
        </menu>
      </div>
      <div className="mt-4 space-y-5">
        <label className="block">
          <div className="mb-2 font-bold">도서</div>
          <select
            className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={bookmark.bookId}
            disabled
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
