import * as React from 'react';

import { formBodyStyle } from './form-body.css';

type NativeDivProps = React.ComponentProps<'div'>;
const FormBody = ({ children, ...props }: NativeDivProps) => (
  <div {...props} className={formBodyStyle}>
    {children}
  </div>
);
FormBody.displayName = 'FormBody';

export { FormBody };
