import { Form } from '@remix-run/react';
import { RiAddLine } from '@remixicon/react';

import GlobalHeader from '~/components/global-header';
import IconButton from '~/components/icon-button';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import PageHeader from '~/components/page-header';
import Record from '~/components/record';

const Books = () => (
  <>
    <GlobalHeader />
    <Main>
      <PageHeader title="도서 목록">
        <Form action="new">
          <IconButton type="submit">
            <RiAddLine size="1em" />
          </IconButton>
        </Form>
      </PageHeader>
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
