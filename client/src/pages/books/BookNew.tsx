import React from "react";
import { useNavigate } from "react-router";

import { NewBookSchema } from "../../../../shared/validations";
import Submit from "../../components/Submit";
import { createBook } from "../../services/book";

export default function BookNew(): React.JSX.Element {
  const navigate = useNavigate();

  async function handleSubmit(formData: FormData): Promise<void> {
    const author = formData.get("author");
    const title = formData.get("title");

    if (typeof author !== "string" || typeof title !== "string") {
      return;
    }

    const inputs = NewBookSchema.parse({ author, title });
    const createdBook = await createBook(inputs);
    await navigate(`/books/${createdBook.id.toString()}`);
  }

  return (
    <form action={handleSubmit}>
      <div className="mt-1 mb-4 flex items-center justify-between">
        <div className="flex items-baseline gap-x-1">
          <h1 className="text-xl font-bold">도서 추가</h1>
        </div>
        <Submit />
      </div>
      <article>
        <div className="mt-4 space-y-5">
          <label className="block">
            <div className="mb-2 font-bold">도서명</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1"
              name="title"
              required
            />
          </label>
          <label className="block">
            <div className="mb-2 font-bold">저자</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1"
              name="author"
              required
            />
          </label>
        </div>
      </article>
    </form>
  );
}
