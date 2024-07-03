import { LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { RiDeleteBinLine, RiPencilLine } from '@remixicon/react';
import invariant from 'tiny-invariant';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { getBook } from '~/libs/data';

import { coverImageStyle } from './route.css';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.bookId, '도서 ID가 존재하지 않습니다.');
  const book = await getBook(params.bookId);
  return { book };
};

const BookDetail = () => {
  const { book } = useLoaderData<typeof loader>();

  return (
    <>
      <ActionHeader heading={book.title} subHeading={book.author}>
        <Form action="destroy" method="post">
          <IconButton title="삭제">
            <RiDeleteBinLine size="1em" />
          </IconButton>
        </Form>
        <Form action="edit">
          <IconButton title="수정">
            <RiPencilLine size="1em" />
          </IconButton>
        </Form>
      </ActionHeader>
      <FormBody>
        <FormLabel>
          제목
          <Input type="text" value={book.title} readOnly />
        </FormLabel>
        <FormLabel>
          저자
          <Input type="text" value={book.author} readOnly />
        </FormLabel>
        <FormLabel>
          표지
          <img
            src={book.coverImageUrl}
            alt={`${book.title}의 표지`}
            className={coverImageStyle}
          />
        </FormLabel>
      </FormBody>
    </>
  );
};

export default BookDetail;
