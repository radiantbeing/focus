import { Link } from "@remix-run/react";

import { BookRecord } from "~/types/book";

import {
  bookAuthor,
  bookCover,
  bookDetails,
  bookInfoContainer,
  bookItem,
  bookLink,
  bookList,
  bookTitle,
} from "./book.css";

const BookRoot = ({ children }: { children: React.ReactNode }) => (
  <ul className={bookList}>{children}</ul>
);

const BookItem = ({ id, coverImageUrl, title, author }: BookRecord) => (
  <li className={bookItem}>
    <Link to={id} className={bookLink}>
      <div className={bookInfoContainer}>
        <img src={coverImageUrl} alt={title} className={bookCover} />
        <div className={bookDetails}>
          <h2 className={bookTitle}>{title}</h2>
          <p className={bookAuthor}>{author}</p>
        </div>
      </div>
    </Link>
  </li>
);

const Book = Object.assign(BookRoot, {
  List: BookRoot,
  Item: BookItem,
});

export default Book;
