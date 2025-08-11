import React from "react";

import type { Book } from "../../../shared/types";

import { getBooks } from "../services/book";

export default function Library(): React.JSX.Element {
    const [books, setBooks] = React.useState<Book[]>([]);

    React.useEffect(function () {
        let ignore = false;

        getBooks()
            .then(function (books) {
                if (!ignore) {
                    setBooks(books);
                }
            })
            .catch(function () {
                setBooks([]);
            });

        return function (): void {
            ignore = true;
        };
    }, []);

    return (
        <>
            <div className="mt-1 mb-2 flex items-baseline gap-x-1">
                <h1 className="text-xl font-bold">서재</h1>
                <div className="text-xs text-gray-600">{books.length}권</div>
            </div>
            <article>
                <ul className="divide-y divide-gray-300">
                    {books.map((book) => (
                        <li className="py-2" key={book.id}>
                            <a href={`/books/${book.id.toString()}`}>
                                <h2 className="font-bold">{book.title}</h2>
                                <div className="text-gray-600">
                                    {book.author}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
}
