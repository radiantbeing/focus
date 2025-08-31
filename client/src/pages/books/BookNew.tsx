import React from "react";
import { useNavigate } from "react-router";

import type { NewBook } from "../../../../shared/types";

import { NewBookSchema } from "../../../../shared/validations";
import Submit from "../../components/Submit";
import { createBook } from "../../services/book";

export default function BookNew(): React.JSX.Element {
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState<NewBook>({
    author: "",
    title: ""
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    try {
      const validInputs = NewBookSchema.parse(inputs);

      createBook(validInputs)
        .then(function ({ id }) {
          return navigate(`/books/${id.toString()}`);
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

  function handleAuthorChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setInputs({ ...inputs, author: event.currentTarget.value });
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputs({ ...inputs, title: event.currentTarget.value });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
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
              onChange={handleTitleChange}
              required
              value={inputs.title}
            />
          </label>
          <label className="block">
            <div className="mb-2 font-bold">저자</div>
            <input
              className="block w-full border border-gray-300 px-1.5 py-1"
              onChange={handleAuthorChange}
              required
              value={inputs.author}
            />
          </label>
        </div>
      </article>
    </form>
  );
}
