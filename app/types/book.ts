export type BookMutation = {
  id?: string;
  title?: string;
  author?: string;
  coverImageUrl?: string;
};

export type BookRecord = BookMutation & {
  id: string;
};
