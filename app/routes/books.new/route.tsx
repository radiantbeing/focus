import { Form, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';

const NewBook = () => {
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  return (
    <Form>
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
          <Input type="text" placeholder="셜록 홈즈" />
        </FormLabel>
        <FormLabel>
          저자
          <Input type="text" placeholder="아서 코난 도일" />
        </FormLabel>
        <FormLabel>
          표지
          <Input type="file" accept="image/*" />
        </FormLabel>
      </FormBody>
    </Form>
  );
};

export default NewBook;
