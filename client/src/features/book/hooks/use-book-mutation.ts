import type { Book, BookId, NewBook } from "@shared/types";

import useMutation from "@client/hooks/use-mutation";
import { useNavigate } from "react-router";

import { createBook, deleteBook, updateBook } from "../services/book";

export function useCreateBook() {
  const navigate = useNavigate();

  return useMutation<Book, NewBook>({
    mutationFn(input) {
      return createBook(input);
    },
    onSuccess(book) {
      void navigate(`/books/${book.id.toString()}`);
    },
  });
}

export function useDeleteBook() {
  const navigate = useNavigate();

  return useMutation<Book, BookId>({
    mutationFn(id) {
      return deleteBook(id);
    },
    onSuccess() {
      void navigate("/books");
    },
  });
}

export function useUpdateBook() {
  const navigate = useNavigate();

  return useMutation<Book, { id: BookId; input: NewBook }>({
    mutationFn({ id, input }) {
      return updateBook(id, input);
    },
    onSuccess(book) {
      void navigate(`/books/${book.id.toString()}`);
    },
  });
}
