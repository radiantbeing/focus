import { Form, json, useLoaderData } from '@remix-run/react';
import { RiAddLine } from '@remixicon/react';

import { getBooks } from '~/api/book';
import { ActionHeader } from '~/components/action-header';
import { IconButton } from '~/components/icon-button';
import { RecordContainer, RecordItem, RecordList } from '~/components/record';
import { urlBuilder } from '~/libs/url-builder';

export const loader = async () => {
  const url = urlBuilder.build('/books');
  const books = await getBooks(url);
  return json({ books });
};

const Books = () => {
  const { books } = useLoaderData<typeof loader>();

  return (
    <>
      <ActionHeader heading="도서 목록">
        <Form action="new">
          <IconButton type="submit">
            <RiAddLine size="1em" />
          </IconButton>
        </Form>
      </ActionHeader>
      <RecordContainer>
        <RecordList>
          {books.map((book) => (
            <RecordItem
              key={book.id}
              title={book.title}
              description={book.author}
              imageUrl={book.coverImageUrl}
              to={book.id}
            />
          ))}
        </RecordList>
      </RecordContainer>
    </>
  );
};

export default Books;
