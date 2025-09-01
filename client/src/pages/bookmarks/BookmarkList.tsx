import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import type { Book, BookId, Bookmark } from "../../../../shared/types";

import IconButton from "../../components/IconButton";
import { listBooks } from "../../services/book";
import { listBookmarks } from "../../services/bookmark";

export default function BookmarkList(): React.JSX.Element {
  const [bookmarks, setBookmarks] = React.useState<Bookmark[]>([]);
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(function () {
    let ignore = false;

    Promise.all([listBooks(), listBookmarks()])
      .then(function ([books, bookmarks]) {
        if (!ignore) {
          setBookmarks(bookmarks);
          setBooks(books);
        }
      })
      .catch(function (error: unknown) {
        if (import.meta.env.DEV) {
          console.error(error);
        }
        if (!ignore) {
          setBookmarks([]);
          setBooks([]);
        }
      });

    return function (): void {
      ignore = true;
    };
  }, []);

  function getBookById(id: BookId): Book | undefined {
    return books.find((b) => b.id === id);
  }

  return (
    <>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피</h1>
          <div className="text-xs text-gray-600">{bookmarks.length}매</div>
        </div>
        <IconButton as="link" icon={<Plus size={16} />} to="/bookmarks/new" />
      </div>
      <article className="space-y-6">
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
                        {`${(date.getMonth() + 1).toString()}월 ${date.getDate().toString()}일`}
                      </span>
                    </div>
                  </div>
                  <div className="truncate text-gray-600">{summary}</div>
                </Link>
              </li>
            ))}
        </ul>
      </article>
    </>
  );
}
