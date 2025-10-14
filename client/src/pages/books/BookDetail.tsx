import useBook from "@client/features/book/hooks/use-book";
import useBookIdParam from "@client/features/book/hooks/use-book-id-param";
import useDeleteBook from "@client/features/book/hooks/use-delete-book";
import IconButton from "@client/ui/button/IconButton";
import ErrorDisplay from "@client/ui/error/ErrorDisplay";
import Loading from "@client/ui/loading/Loading";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

export default function BookDetail(): React.JSX.Element {
  const bookId = useBookIdParam();
  const { book, error, loading } = useBook(bookId);
  const { handleDelete } = useDeleteBook(bookId);

  async function handleDeleteClick(): Promise<void> {
    if (
      !confirm(`• 현재 도서 삭제

이 작업은 되돌릴 수 없습니다.
계속하시겠습니까?`)
    ) {
      return;
    }
    await handleDelete();
  }

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
          <IconButton icon={<Trash2 size={16} />} onClick={handleDeleteClick} />
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
