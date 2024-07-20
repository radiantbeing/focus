type BookMutation = {
  id?: string;
  title?: string;
  author?: string;
  coverImage?: File;
};

type BookMutationWithId = BookMutation & { id: string };

type BookRecord = Omit<BookMutation, 'coverImage'> & {
  id: string;
  coverImageUrl?: string;
};

export type { BookMutation, BookMutationWithId, BookRecord };
