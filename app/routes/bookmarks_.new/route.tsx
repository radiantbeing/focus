import { Form, useNavigate } from '@remix-run/react';
import { RiCloseLine, RiSaveLine } from '@remixicon/react';

import { FormBody } from '~/components/form-body';
import { FormInput } from '~/components/form-input';
import { FormLabel } from '~/components/form-label';
import { FormTextarea } from '~/components/form-textarea';
import GlobalHeader from '~/components/global-header';
import IconButton from '~/components/icon-button';
import Main from '~/components/main';
import Navbar from '~/components/navbar';
import PageHeader from '~/components/page-header';
import { Select } from '~/components/select';

const NewBookmark = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalHeader />
      <Main>
        <Form>
          <PageHeader title="새 책갈피">
            <IconButton title="취소" onClick={() => navigate(-1)}>
              <RiCloseLine size="1em" />
            </IconButton>
            <IconButton title="저장">
              <RiSaveLine size="1em" />
            </IconButton>
          </PageHeader>
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
              <FormTextarea></FormTextarea>
            </FormLabel>
            <FormLabel>
              사진
              <FormInput type="file" accept="image/*" />
            </FormLabel>
          </FormBody>
        </Form>
      </Main>
      <Navbar />
    </>
  );
};

export default NewBookmark;
