import * as React from 'react';

import { labelStyle } from './form-label.css';

type NativeLabelProps = React.ComponentPropsWithoutRef<'label'>;
const FormLabel = React.forwardRef<HTMLLabelElement, NativeLabelProps>(
  ({ children, ...props }, ref) => (
    <label ref={ref} {...props} className={labelStyle}>
      {children}
    </label>
  )
);
FormLabel.displayName = 'FormLabel';

export { FormLabel };
