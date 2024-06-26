import * as React from 'react';

import { selectStyle } from './select.css';

type NativeSelectProps = React.ComponentPropsWithoutRef<'select'>;
const Select = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ children, ...props }, ref) => (
    <select ref={ref} {...props} className={selectStyle}>
      {children}
    </select>
  )
);
Select.displayName = 'Select';

export { Select };
