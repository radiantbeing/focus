import React from "react";
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router";

import type { Book } from "../../../../shared/types";

import { NewBookmarkSchema } from "../../../../shared/validations";
import { listBooks } from "../../services/book";
import { createBookmark } from "../../services/bookmark";

export default function BookmarkNew(): React.JSX.Element {
  const navigate = useNavigate();

  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(function () {
    let ignore = false;

    async function loadBooks(): Promise<void> {
      const books = await listBooks();
      if (!ignore) {
        setBooks(books);
      }
    }

    loadBooks().catch(console.error);

    return function (): void {
      ignore = true;
    };
  }, []);

  async function handleSubmit(formData: FormData): Promise<void> {
    const bookId = formData.get("bookId");
    const page = formData.get("page");
    const summary = formData.get("summary");

    if (
      typeof bookId !== "string" ||
      typeof page !== "string" ||
      typeof summary !== "string"
    ) {
      return;
    }

    const inputs = NewBookmarkSchema.parse({
      bookId: parseInt(bookId),
      page: parseInt(page),
      summary
    });

    const createdBookmark = await createBookmark(inputs);
    await navigate(`/bookmarks/${createdBookmark.id.toString()}`);
  }

  return (
    <>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">책갈피 추가</h1>
        </div>
      </div>
      <article>
        <form action={handleSubmit} className="mt-4 space-y-5">
          <label className="block">
            <div className="mb-2 font-bold">도서</div>
            <select
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              name="bookId"
              required
            >
              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title} / {book.author}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <div className="mb-2 font-bold">페이지</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              min={1}
              name="page"
              required
              step={1}
              type="number"
            />
          </label>
          <label className="block">
            <div className="mb-2 font-bold">요약</div>
            <textarea
              className="block h-40 w-full border border-gray-300 px-1.5 py-1 disabled:bg-gray-100"
              name="summary"
            />
          </label>
          <Submit />
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
      {pending ? "제출 중..." : "제출"}
    </button>
  );
}
