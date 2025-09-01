import { useNavigate } from "react-router";

import type { BookId } from "../../../../shared/types";

import { NewBookSchema } from "../../../../shared/validations";
import { updateBook } from "../../services/book";

interface UseUpdateBookReturn {
  handleUpdate: (formData: FormData) => Promise<void>;
}

export default function useUpdateBook(id: BookId | null): UseUpdateBookReturn {
  const navigate = useNavigate();

  async function handleUpdate(formData: FormData): Promise<void> {
    if (id === null) {
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
