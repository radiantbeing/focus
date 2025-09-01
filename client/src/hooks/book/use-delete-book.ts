import { useNavigate } from "react-router";

import type { BookId } from "../../../../shared/types";

import { deleteBook } from "../../services/book";

interface UseDeleteBookReturn {
  handleDelete: () => Promise<void>;
}

export default function useDeleteBook(id: BookId | null): UseDeleteBookReturn {
  const navigate = useNavigate();

  async function handleDelete(): Promise<void> {
    if (id === null) {
      return;
    }

    await deleteBook(id);
    await navigate("/books");
  }

  return { handleDelete };
}
