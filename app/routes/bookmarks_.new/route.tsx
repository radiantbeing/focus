import { Form, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';

import { ActionHeader } from '~/components/action-header';
import { FormBody } from '~/components/form-body';
import { FormLabel } from '~/components/form-label';
import { Header } from '~/components/header';
import { IconButton } from '~/components/icon-button';
import { Input } from '~/components/input';
import { Main } from '~/components/main';
import { Navbar } from '~/components/navbar';
import { Select } from '~/components/select';
import { Textarea } from '~/components/textarea';

const NewBookmark = () => {
  const navigate = useNavigate();

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Main>
        <Form>
          <ActionHeader heading="새 책갈피">
            <IconButton title="취소" onClick={handleCancelButtonClick}>
              <RiCloseLine size="1em" />
            </IconButton>
            <IconButton title="저장">
              <RiSaveLine size="1em" />
            </IconButton>
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
              내용
              <Textarea></Textarea>
            </FormLabel>
            <FormLabel>
              사진
              <Input type="file" accept="image/*" />
            </FormLabel>
          </FormBody>
        </Form>
      </Main>
      <Navbar />
    </>
  );
};

export default NewBookmark;
