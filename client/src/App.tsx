import { Bolt, Bookmark, House, LibraryBig } from "lucide-react";
import React, { useEffect, useState } from "react";
import { type Book } from "../../shared/types";
import { getBooks } from "./services/book";

export default function App(): React.JSX.Element {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(function () {
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
        <div className="mx-auto w-full max-w-150">
            <header className="fixed top-0 flex h-12 w-full max-w-150 items-center border-b border-gray-400 px-2 font-[Tinos] text-2xl backdrop-blur-3xl">
                FOCUS
            </header>
            <main className="px-2 pt-14 pb-17">
                <h1 className="text-lg font-bold">서재</h1>
                <article>
                    <ul className="divide-y divide-gray-300">
                        {books.map((book) => (
                            <li className="py-1" key={book.id}>
                                <a href={`/books/${book.id.toString()}`}>
                                    <h2 className="font-bold">{book.title}</h2>
                                    <div>{book.author}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </article>
            </main>
            <nav className="fixed bottom-0 flex h-15 w-full max-w-150 items-center border-t border-gray-400 bg-white px-2 pt-1">
                <a
                    href="/dashboard"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <House size={18} />
                    <span>대시보드</span>
                </a>
                <a
                    href="/bookmark"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <Bookmark size={18} />
                    <span>책갈피</span>
                </a>
                <a
                    href="/library"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <LibraryBig size={18} />
                    <span>서재</span>
                </a>
                <a
                    href="/setting"
                    className="flex flex-1 flex-col items-center gap-y-0.5 text-sm"
                >
                    <Bolt size={18} />
                    <span>설정</span>
                </a>
            </nav>
        </div>
    );
}
