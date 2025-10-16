import { useBooks } from "@client/features/book/hooks";
import IconButton from "@client/ui/button/IconButton";
import ErrorDisplay from "@client/ui/error/ErrorDisplay";
import Loading from "@client/ui/loading/Loading";
import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function BookList(): React.JSX.Element {
  const { data: books, error, status } = useBooks();

  if (status === "error") {
    return <ErrorDisplay error={error} />;
  }

  if (status === "loading") {
    return <Loading message="도서 목록을 가져오는 중입니다." />;
  }

  return (
    <>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">서재</h1>
          <div className="text-xs text-gray-600">{books.length}권</div>
        </div>
        <div className="flex gap-x-1">
          <IconButton as="link" icon={<Plus size={16} />} to="/books/new" />
        </div>
      </div>
      <article>
        <ul className="divide-y divide-gray-300">
          {books.map((book) => (
            <li className="py-2 first:pt-0" key={book.id}>
              <Link to={`/books/${book.id.toString()}`}>
                <h2 className="font-bold">{book.title}</h2>
                <div className="text-sm text-gray-600">{book.author}</div>
              </Link>
            </li>
          ))}
        </ul>
        {books.length === 0 && (
          <p className="text-gray-600">첫 번째 도서를 추가해보세요.</p>
        )}
      </article>
    </>
  );
}
