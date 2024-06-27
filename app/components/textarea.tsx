import * as React from 'react';

import { textareaStyle } from './textarea.css';

type NativeTextareaProps = React.ComponentPropsWithoutRef<'textarea'>;
const Textarea = React.forwardRef<HTMLTextAreaElement, NativeTextareaProps>(
  ({ children, ...props }, ref) => (
    <textarea ref={ref} {...props} className={textareaStyle}>
      {children}
    </textarea>
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };
