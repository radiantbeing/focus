import { createBook } from "@client/features/book/services/book";
import { NewBookSchema } from "@shared/validations";
import { useNavigate } from "react-router";

interface UseCreateBookReturn {
  handleCreate: (formData: FormData) => Promise<void>;
}

export default function useCreateBook(): UseCreateBookReturn {
  const navigate = useNavigate();

  async function handleCreate(formData: FormData): Promise<void> {
    const author = formData.get("author");
    const title = formData.get("title");

    const inputs = NewBookSchema.parse({ author, title });
    const createdBook = await createBook(inputs);
    await navigate(`/books/${createdBook.id.toString()}`);
  }

  return { handleCreate };
}
