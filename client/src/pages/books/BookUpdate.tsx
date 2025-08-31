import { Undo2 } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router";

import type { Book } from "../../../../shared/types";

import { NewBookSchema } from "../../../../shared/validations";
import IconFrame from "../../components/IconFrame";
import Submit from "../../components/Submit";
import { getBook, updateBook } from "../../services/book";
import NotFound from "../NotFound";

export default function BookUpdate(): React.JSX.Element {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = React.useState<Book | null>(null);

  React.useEffect(
    function () {
      if (bookId === undefined) {
        return;
      }

      let ignore = false;

      getBook(parseInt(bookId))
        .then(function (books) {
          if (!ignore) {
            setBook(books);
          }
        })
        .catch(function (error: unknown) {
          if (import.meta.env.DEV) {
            console.error(error);
          }
          if (!ignore) {
            setBook(null);
          }
        });

      return function (): void {
        ignore = true;
      };
    },
    [bookId]
  );

  function handleSubmit(formData: FormData): void {
    if (bookId === undefined) {
      return;
    }

    const author = formData.get("author") ?? "작자 미상";
    const title = formData.get("title") ?? "무제";

    try {
      const validInputs = NewBookSchema.parse({ author, title });

      updateBook(parseInt(bookId), validInputs)
        .then(function (updatedBook) {
          setBook(updatedBook);
          return navigate(`/books/${updatedBook.id.toString()}`);
        })
        .catch(function (error: unknown) {
          if (import.meta.env.DEV) {
            console.error(error);
          }
        });
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error(error);
      }
    }
  }

  async function handleUndoButtonClick(): Promise<void> {
    await navigate(-1);
  }

  if (bookId === undefined) {
    return <NotFound />;
  }

  if (book === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <form action={handleSubmit}>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">도서 상세</h1>
        </div>
        <div className="flex gap-x-1">
          <IconFrame>
            <button onClick={handleUndoButtonClick} type="button">
              <Undo2 size={16} />
            </button>
          </IconFrame>
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
