import { BookRecord } from './book';

type BookmarkMutation = {
  id?: string;
  bookId?: string;
  page?: number;
  content?: string;
  thumbnailImage?: File;
};

type BookmarkRecord = Omit<BookmarkMutation, 'bookId' | 'thumbnailImage'> & {
  id: string;
  date: string;
  book: BookRecord;
  thumbnailImageUrl?: string;
};

export type { BookmarkMutation, BookmarkRecord };
