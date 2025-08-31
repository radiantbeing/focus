import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Link, useLocation, useNavigate, useParams } from "react-router";

import type { Book } from "../../../../shared/types";

import { NewBookSchema } from "../../../../shared/validations";
import { deleteBook, getBook, updateBook } from "../../services/book";
import NotFound from "../NotFoundPage";

export default function BookPage(): React.JSX.Element {
  const { bookId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [book, setBook] = React.useState<Book | null>(null);

  const edit = location.pathname.endsWith("/edit");

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

  if (bookId === undefined) {
    return <NotFound />;
  }

  if (book === null) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">도서 상세</h1>
        </div>
        <div className="flex gap-x-1">
          {!edit && (
            <Link
              className="cursor-pointer rounded-sm border border-gray-300 p-2"
              to="edit"
            >
              <Pencil size={16} />
            </Link>
          )}

          <button
            className="cursor-pointer rounded-sm border border-gray-300 p-2"
            onClick={function () {
              deleteBook(parseInt(bookId))
                .then(function () {
                  return navigate("/books");
                })
                .catch(function (error: unknown) {
                  if (import.meta.env.DEV) {
                    console.error(error);
                  }
                });
            }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <article>
        <form
          action={function (formData) {
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
          }}
          className="mt-4 space-y-5"
        >
          <label className="block">
            <div className="mb-2 font-bold">도서명</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              defaultValue={book.title}
              disabled={!edit}
              name="title"
              required
            />
          </label>
          <label className="block">
            <div className="mb-2 font-bold">저자</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              defaultValue={book.author}
              disabled={!edit}
              name="author"
              required
            />
          </label>
          {edit && <Submit />}
        </form>
      </article>
    </>
  );
}

function Submit(): React.JSX.Element {
  const { pending } = useFormStatus();
  return (
    <button
      className="flex items-center rounded-xs bg-gray-100 px-3 py-2"
      disabled={pending}
      type="submit"
    >
      {pending ? "제출 중..." : "수정"}
    </button>
  );
}
