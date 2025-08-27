import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import type { Book } from "../../../../shared/types";

import { listBooks } from "../../services/book";

export default function Books(): React.JSX.Element {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(function () {
    let ignore = false;

    listBooks()
      .then(function (books) {
        if (!ignore) {
          setBooks(books);
        }
      })
      .catch(function (error: unknown) {
        if (import.meta.env.DEV) {
          console.error(error);
        }
        if (!ignore) {
          setBooks([]);
        }
      });

    return function (): void {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">서재</h1>
          <div className="text-xs text-gray-600">{books.length}권</div>
        </div>
        <Link
          className="cursor-pointer rounded-sm border border-gray-300 p-2"
          to="/books/new"
        >
          <Plus size={16} />
        </Link>
      </div>
      <article>
        <ul className="divide-y divide-gray-300">
          {books.map((book) => (
            <li className="py-2 first:pt-0" key={book.id}>
              <a href={`/books/${book.id.toString()}`}>
                <h2 className="font-bold">{book.title}</h2>
                <div className="text-gray-600">{book.author}</div>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
