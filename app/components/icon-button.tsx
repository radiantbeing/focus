import React from 'react';

import { buttonStyle } from './icon-button.css';

type NativeButtonProps = React.ComponentPropsWithoutRef<'button'>;
const IconButton = React.forwardRef<HTMLButtonElement, NativeButtonProps>(
  ({ children, ...props }, ref) => (
    <button ref={ref} className={buttonStyle} {...props}>
      {children}
    </button>
  )
);
IconButton.displayName = 'IconButton';

export { IconButton };
