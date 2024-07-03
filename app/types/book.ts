export type BookMutation = {
  id?: string;
  title?: string;
  author?: string;
  coverImage?: File;
};

export type BookMutationWithId = BookMutation & { id: string };

export type BookRecord = Omit<BookMutation, 'coverImage'> & {
  id: string;
  coverImageUrl?: string;
};
