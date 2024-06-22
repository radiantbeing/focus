import { Form } from '@remix-run/react';

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="1em"
              height="1em"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
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
