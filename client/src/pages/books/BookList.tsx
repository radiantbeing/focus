import { Plus, RefreshCcw } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import ErrorDisplay from "../../components/ErrorDisplay";
import IconButton from "../../components/IconButton";
import Loading from "../../components/Loading";
import useBooks from "../../hooks/book/use-books";

export default function BookList(): React.JSX.Element {
  const { books, error, loading, refetch } = useBooks();

  function handleRefreshClick(): void {
    refetch();
  }

  if (error) {
    return <ErrorDisplay message="도서 목록을 가져오지 못했습니다." />;
  }

  if (loading) {
    return <Loading message="도서 목록을 가져오는 중입니다." />;
  }

  return (
    <article>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">서재</h1>
          <div className="text-xs text-gray-600">{books.length}권</div>
        </div>
        <div className="flex gap-x-1">
          <IconButton
            icon={<RefreshCcw size={16} />}
            onClick={handleRefreshClick}
          />
          <IconButton as="link" icon={<Plus size={16} />} to="/books/new" />
        </div>
      </div>
      <ul className="divide-y divide-gray-300">
        {books.map((book) => (
          <li className="py-2 first:pt-0" key={book.id}>
            <Link to={`/books/${book.id.toString()}`}>
              <h2 className="font-bold">{book.title}</h2>
              <div className="text-gray-600">{book.author}</div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
