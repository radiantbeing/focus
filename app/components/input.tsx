import * as React from 'react';

import { inputStyle } from './input.css';

type NativeInputProps = React.ComponentPropsWithoutRef<'input'>;
const Input = React.forwardRef<HTMLInputElement, NativeInputProps>(
  ({ children, ...props }, ref) => (
    <input ref={ref} {...props} className={inputStyle}>
      {children}
    </input>
  )
);
Input.displayName = 'FormInput';

export { Input };
