import type { ActionFunctionArgs } from '@remix-run/node';
import { Form, redirect, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { createBook } from '~/libs/data';
import { BookMutation } from '~/types/book';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const mutation: BookMutation = Object.fromEntries(formData);

  if (mutation.coverImage && mutation.coverImage.size === 0) {
    delete mutation.coverImage;
  }

  const createdBook = await createBook(mutation);
  return redirect(`/books/${createdBook.id}`);
};

const NewBook = () => {
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  return (
    <Form method="post" encType="multipart/form-data">
      <ActionHeader heading="새 도서">
        <IconButton title="취소" onClick={handleCancelButtonClick}>
          <RiCloseLine size="1em" />
        </IconButton>
        <IconButton title="저장">
          <RiSaveLine size="1em" />
        </IconButton>
      </ActionHeader>
      <FormBody>
        <FormLabel>
          제목
          <Input type="text" name="title" placeholder="셜록 홈즈" required />
        </FormLabel>
        <FormLabel>
          저자
          <Input
            type="text"
            name="author"
            placeholder="아서 코난 도일"
            required
          />
        </FormLabel>
        <FormLabel>
          표지
          <Input type="file" name="coverImage" accept="image/*" />
        </FormLabel>
      </FormBody>
    </Form>
  );
};

export default NewBook;
