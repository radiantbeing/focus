import type { BookId } from "@shared/types";

import { updateBook } from "@client/features/book/services/book";
import { NewBookSchema } from "@shared/validations";
import { useNavigate } from "react-router";

interface UseUpdateBookReturn {
  handleUpdate: (formData: FormData) => Promise<void>;
}

export default function useUpdateBook(id?: BookId): UseUpdateBookReturn {
  const navigate = useNavigate();

  async function handleUpdate(formData: FormData): Promise<void> {
    if (id === undefined) {
      return;
    }

    const author = formData.get("author");
    const title = formData.get("title");

    const inputs = NewBookSchema.parse({ author, title });

    const updatedBook = await updateBook(id, inputs);
    await navigate(`/books/${updatedBook.id.toString()}`);
  }

  return { handleUpdate };
}
