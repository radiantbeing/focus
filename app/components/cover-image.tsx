import * as React from 'react';

import { coverImageStyle } from './cover-image.css';

type NativeImgProps = React.ComponentProps<'img'>;
const CoverImage = (props: NativeImgProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img className={coverImageStyle} {...props} />
);

export { CoverImage };
