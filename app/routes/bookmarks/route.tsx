import { Form } from '@remix-run/react';

import GlobalHeader from '~/components/global-header';
import IconButton from '~/components/icon-button';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import PageHeader from '~/components/page-header';
import Record from '~/components/record';

const Bookmarks = () => (
  <>
    <GlobalHeader />
    <Main>
      <PageHeader title="책갈피 목록">
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
