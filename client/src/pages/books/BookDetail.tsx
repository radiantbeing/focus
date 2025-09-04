import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { useParams } from "react-router";

import ErrorDisplay from "../../components/ErrorDisplay";
import IconButton from "../../components/IconButton";
import Loading from "../../components/Loading";
import useBook from "../../hooks/book/use-book";
import useDeleteBook from "../../hooks/book/use-delete-book";

export default function BookDetail(): React.JSX.Element {
  const { bookId } = useParams();
  const { book, error, loading } = useBook(bookId);
  const { handleDelete } = useDeleteBook(bookId);

  if (error !== null) {
    return <ErrorDisplay error={error} />;
  }

  if (loading) {
    return <Loading message="도서 정보를 가져오는 중입니다." />;
  }

  if (book === null) {
    return <ErrorDisplay message="도서를 찾을 수 없습니다." />;
  }

  return (
    <article>
      <header className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">도서 상세</h1>
        </div>
        <div className="flex gap-x-1">
          <IconButton icon={<Trash2 size={16} />} onClick={handleDelete} />
          <IconButton as="link" icon={<Pencil size={16} />} to="edit" />
        </div>
      </header>
      <div className="mt-4 space-y-5">
        <label className="block">
          <div className="mb-2 font-bold">도서명</div>
          <input
            className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={book.title}
            disabled
          />
        </label>
        <label className="block">
          <div className="mb-2 font-bold">저자</div>
          <input
            className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
            defaultValue={book.author}
            disabled
          />
        </label>
      </div>
    </article>
  );
}
