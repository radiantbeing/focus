import type { BookId } from "@shared/types";

import { deleteBook } from "@client/features/book/services/book";
import { useNavigate } from "react-router";

interface UseDeleteBookReturn {
  handleDelete: () => Promise<void>;
}

export default function useDeleteBook(id?: BookId): UseDeleteBookReturn {
  const navigate = useNavigate();

  async function handleDelete(): Promise<void> {
    if (id === undefined) {
      return;
    }

    await deleteBook(id);
    await navigate("/books");
  }

  return { handleDelete };
}
