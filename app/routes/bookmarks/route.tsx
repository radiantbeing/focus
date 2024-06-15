import Header from '~/components/header';
import Heading from '~/components/heading';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import Record from '~/components/record';

const Bookmarks = () => (
  <>
    <Header />
    <Main>
      <Heading>책갈피 목록</Heading>
      <Record>
        <Record.Header>2024년 8월 21일</Record.Header>
        <Record.List>
          <Record.Item
            title="1984"
            description="16p"
            imageUrl="https://placehold.co/400x600"
            to="16"
          />
          <Record.Item
            title="Pride and Prejudice"
            description="234p"
            imageUrl="https://placehold.co/400x600"
            to="16"
          />
        </Record.List>
      </Record>
      <Record>
        <Record.Header>2024년 8월 21일</Record.Header>
        <Record.List>
          <Record.Item
            title="The Great Gatsby"
            description="32p"
            imageUrl="https://placehold.co/400x600"
            to="16"
          />
        </Record.List>
      </Record>
    </Main>
    <Navbar />
  </>
);

export default Bookmarks;
