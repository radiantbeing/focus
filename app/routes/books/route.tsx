import { Form } from '@remix-run/react';
import { RiAddLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { Header } from '~/components/header';
import { IconButton } from '~/components/icon-button';
import { Main } from '~/components/main';
import { Navbar } from '~/components/navbar';
import { RecordContainer, RecordItem, RecordList } from '~/components/record';

const Books = () => (
  <>
    <Header />
    <Main>
      <ActionHeader heading="도서 목록">
        <Form action="new">
          <IconButton type="submit">
            <RiAddLine size="1em" />
          </IconButton>
        </Form>
      </ActionHeader>
      <RecordContainer>
        <RecordList>
          <RecordItem
            title="1984"
            description="George Orwell"
            imageUrl="https://placehold.co/400x600"
            to="1"
          />
          <RecordItem
            title="To Kill a Mockingbird"
            description="Harper Lee"
            imageUrl="https://placehold.co/400x600"
            to="2"
          />
          <RecordItem
            title="Pride and Prejudice"
            description="Jane Austen"
            imageUrl="https://placehold.co/400x600"
            to="3"
          />
        </RecordList>
      </RecordContainer>
    </Main>
    <Navbar />
  </>
);

export default Books;
