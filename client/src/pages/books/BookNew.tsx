import useCreateBook from "@client/features/book/hooks/use-create-book";
import Submit from "@client/ui/form/Submit";
import React from "react";

export default function BookNew(): React.JSX.Element {
  const { handleCreate } = useCreateBook();

  return (
    <form action={handleCreate}>
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
