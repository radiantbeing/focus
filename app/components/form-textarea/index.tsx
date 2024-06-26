import * as React from 'react';

import { formTextareaStyle } from './form-textarea.css';

type NativeTextareaProps = React.ComponentPropsWithoutRef<'textarea'>;
const FormTextarea = React.forwardRef<HTMLTextAreaElement, NativeTextareaProps>(
  ({ children, ...props }, ref) => (
    <textarea ref={ref} {...props} className={formTextareaStyle}>
      {children}
    </textarea>
  )
);
FormTextarea.displayName = 'FormTextarea';

export { FormTextarea };
