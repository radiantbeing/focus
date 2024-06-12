import Header from "~/components/header";
import Heading from "~/components/heading";
import Main from "~/components/main";
import Navbar from "~/components/navbar";

import Book from "./book";

const Books = () => (
  <>
    <Header />
    <Main>
      <Heading>도서 목록</Heading>
      <Book.List>
        <Book.Item
          id="123"
          coverImageUrl="https://placehold.co/400x600"
          title="1984"
          author="조지 오웰"
        />
        <Book.Item
          id="234"
          coverImageUrl="https://placehold.co/400x600"
          title="1984"
          author="조지 오웰"
        />
      </Book.List>
    </Main>
    <Navbar />
  </>
);

export default Books;
