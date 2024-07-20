type BookmarkMutation = {
  id?: string;
  bookId?: string;
  page?: number;
  content?: string;
  thumbnailImage?: File;
};

type BookmarkRecord = Omit<BookmarkMutation, 'bookId' | 'thumbnailImage'> & {
  id: string;
  bookTitle: string;
  date: string;
  thumbnailImageUrl?: string;
};

export type { BookmarkMutation, BookmarkRecord };
