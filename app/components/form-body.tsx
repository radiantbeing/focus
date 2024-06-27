import * as React from 'react';

import { bodyStyle } from './form-body.css';

type NativeDivProps = React.ComponentProps<'div'>;
const FormBody = ({ children, ...props }: NativeDivProps) => (
  <div {...props} className={bodyStyle}>
    {children}
  </div>
);
FormBody.displayName = 'FormBody';

export { FormBody };
