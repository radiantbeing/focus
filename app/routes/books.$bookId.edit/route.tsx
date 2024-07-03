import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form, redirect, useLoaderData, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';
import invariant from 'tiny-invariant';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { getBook, updateBook } from '~/libs/data';
import type { BookMutation } from '~/types/book';

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.bookId, '수정할 도서 ID가 존재하지 않습니다.');
  const formData = await request.formData();
  const mutation: BookMutation = Object.fromEntries(formData);

  if (mutation.coverImage && mutation.coverImage.size === 0) {
    delete mutation.coverImage;
  }

  await updateBook(params.bookId, mutation);
  return redirect(`/books/${params.bookId}`);
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.bookId, '조회할 도서 ID가 존재하지 않습니다.');
  const book = await getBook(params.bookId);
  return { book };
};

const BookEdit = () => {
  const { book } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  return (
    <Form method="post" encType="multipart/form-data">
      <ActionHeader heading={book.title} subHeading={book.author}>
        <IconButton
          type="button"
          title="취소"
          onClick={handleCancelButtonClick}
        >
          <RiCloseLine size="1em" />
        </IconButton>
        <IconButton type="submit" title="저장">
          <RiSaveLine size="1em" />
        </IconButton>
      </ActionHeader>
      <FormBody>
        <FormLabel>
          제목
          <Input type="text" name="title" defaultValue={book.title} required />
        </FormLabel>
        <FormLabel>
          저자
          <Input
            type="text"
            name="author"
            defaultValue={book.author}
            required
          />
        </FormLabel>
        <FormLabel>
          표지
          <Input type="file" name="coverImage" />
        </FormLabel>
      </FormBody>
    </Form>
  );
};

export default BookEdit;
