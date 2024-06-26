import * as React from 'react';

import { inputStyle } from './form-input.css';

type NativeInputProps = React.ComponentPropsWithoutRef<'input'>;
const FormInput = React.forwardRef<HTMLInputElement, NativeInputProps>(
  ({ children, ...props }, ref) => (
    <input ref={ref} {...props} className={inputStyle}>
      {children}
    </input>
  )
);
FormInput.displayName = 'FormInput';

export { FormInput };
