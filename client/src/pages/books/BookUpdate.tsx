import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

import ErrorDisplay from "../../components/ErrorDisplay";
import IconButton from "../../components/IconButton";
import Loading from "../../components/Loading";
import Submit from "../../components/Submit";
import useBook from "../../hooks/book/use-book";
import useUpdateBook from "../../hooks/book/use-update-book";

export default function BookUpdate(): React.JSX.Element {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { book, error, loading } = useBook(
    bookId !== undefined ? parseInt(bookId) : null
  );
  const { handleUpdate } = useUpdateBook(
    bookId !== undefined ? parseInt(bookId) : null
  );

  async function handleUndo(): Promise<void> {
    await navigate(-1);
  }

  if (error !== null) {
    return <ErrorDisplay error={error} />;
  }

  if (loading) {
    return <Loading text="도서 정보를 가져오는 중입니다." />;
  }

  if (book === null) {
    return <ErrorDisplay message="도서를 찾을 수 없습니다." />;
  }

  return (
    <form action={handleUpdate}>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">도서 상세</h1>
        </div>
        <div className="flex gap-x-1">
          <IconButton
            icon={<Undo2 size={16} />}
            onClick={handleUndo}
            type="button"
          />
          <Submit />
        </div>
      </div>
      <article>
        <div className="mt-4 space-y-5">
          <label className="block">
            <div className="mb-2 font-bold">도서명</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              defaultValue={book.title}
              name="title"
              required
            />
          </label>
          <label className="block">
            <div className="mb-2 font-bold">저자</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              defaultValue={book.author}
              name="author"
              required
            />
          </label>
        </div>
      </article>
    </form>
  );
}
