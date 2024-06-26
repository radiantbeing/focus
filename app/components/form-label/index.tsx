import * as React from 'react';

import { formLabelStyle } from './form-label.css';

type NativeLabelProps = React.ComponentPropsWithoutRef<'label'>;
const FormLabel = React.forwardRef<HTMLLabelElement, NativeLabelProps>(
  ({ children, ...props }, ref) => (
    <label ref={ref} {...props} className={formLabelStyle}>
      {children}
    </label>
  )
);
FormLabel.displayName = 'FormLabel';

export { FormLabel };
