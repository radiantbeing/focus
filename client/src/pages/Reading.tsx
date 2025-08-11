import React from "react";

import type { Book, Bookmark } from "../../../shared/types";

import { getBooks } from "../services/book";
import { getBookmarks } from "../services/bookmark";
import { getWeekOfMonth } from "../utils/date";

export default function Reading(): React.JSX.Element {
    const [bookmarks, setBookmarks] = React.useState<Bookmark[]>([]);
    const [books, setBooks] = React.useState<Book[]>([]);

    const bookmarksByWeekOfMonth = bookmarks.reduce<Record<string, Bookmark[]>>(
        function (record, bookmark) {
            const month = bookmark.date.getMonth() + 1;
            const weekOfMonth = getWeekOfMonth(bookmark.date);
            const key = `${month.toString()}월 ${weekOfMonth.toString()}주차`;
            record[key] ??= [];
            record[key].push(bookmark);
            return record;
        },
        {}
    );
    const bookById = Object.fromEntries(books.map((book) => [book.id, book]));

    React.useEffect(function () {
        let ignore = false;

        Promise.all([getBooks(), getBookmarks()])
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

    return (
        <>
            <div className="mt-1 mb-4 flex items-baseline gap-x-1">
                <h1 className="text-xl font-bold">책갈피</h1>
                <div className="text-xs text-gray-600">
                    {bookmarks.length}매
                </div>
            </div>
            <article>
                {Object.keys(bookmarksByWeekOfMonth).map((weekOfMonth) => (
                    <div key={weekOfMonth}>
                        <div className="my-2 border-y-1">{weekOfMonth}</div>
                        <ul className="divide-y divide-gray-300">
                            {[...bookmarksByWeekOfMonth[weekOfMonth]]
                                .sort(
                                    (a, b) =>
                                        b.date.getTime() - a.date.getTime()
                                )
                                .map(({ bookId, date, id, summary }) => (
                                    <li className="py-2" key={id}>
                                        <a href={`/bookmarks/${id.toString()}`}>
                                            <div className="flex items-center justify-between">
                                                <h2 className="font-bold">
                                                    {bookById[bookId].title}
                                                </h2>
                                                <span className="text-xs text-gray-600">{`${(date.getMonth() + 1).toString()}월 ${date.getDate().toString()}일`}</span>
                                            </div>
                                            <div className="truncate text-gray-600">
                                                {summary}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </article>
        </>
    );
}
