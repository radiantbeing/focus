import { Form } from '@remix-run/react';
import { RiDeleteBinLine, RiPencilLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { Select } from '~/components/select';
import { Textarea } from '~/components/textarea';

const BookmarkDetail = () => (
  <>
    <ActionHeader heading="1984" subHeading="조지 오웰">
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
        도서
        <Select defaultValue="">
          <option value="" disabled>
            도서를 선택해주세요.
          </option>
        </Select>
      </FormLabel>
      <FormLabel>
        쪽
        <Input type="number" inputMode="decimal" min={1} />
      </FormLabel>
      <FormLabel>
        내용
        <Textarea></Textarea>
      </FormLabel>
      <FormLabel>
        <img
          src="https://placehold.co/1000x2000"
          alt="1984의 16쪽"
          height={160}
        />
        사진
      </FormLabel>
    </FormBody>
  </>
);

export default BookmarkDetail;
