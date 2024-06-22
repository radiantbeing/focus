import GlobalHeader from '~/components/global-header';
import Heading from '~/components/heading';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import Record from '~/components/record';

const Books = () => (
  <>
    <GlobalHeader />
    <Main>
      <Heading as="h1">도서 목록</Heading>
      <Record>
        <Record.List>
          <Record.Item
            title="1984"
            description="George Orwell"
            imageUrl="https://placehold.co/400x600"
            to="1"
          />
          <Record.Item
            title="To Kill a Mockingbird"
            description="Harper Lee"
            imageUrl="https://placehold.co/400x600"
            to="2"
          />
          <Record.Item
            title="Pride and Prejudice"
            description="Jane Austen"
            imageUrl="https://placehold.co/400x600"
            to="3"
          />
        </Record.List>
      </Record>
    </Main>
    <Navbar />
  </>
);

export default Books;
