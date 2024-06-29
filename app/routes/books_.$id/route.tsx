import { Form } from '@remix-run/react';
import { RiDeleteBinLine, RiPencilLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';

const BookDetail = () => (
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
        제목
        <Input type="text" placeholder="셜록 홈즈" readOnly />
      </FormLabel>
      <FormLabel>
        저자
        <Input type="text" placeholder="아서 코난 도일" readOnly />
      </FormLabel>
      <FormLabel>
        표지
        <img
          src="https://placehold.co/1000x2000"
          alt="1984의 표지"
          height={160}
        />
      </FormLabel>
    </FormBody>
  </>
);

export default BookDetail;
