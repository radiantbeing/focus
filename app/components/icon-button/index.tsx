import React from 'react';

import { iconButton } from './icon-button.css';

type NativeButtonProps = React.ComponentPropsWithoutRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, NativeButtonProps>(
  ({ children, ...props }, ref) => (
    <button ref={ref} className={iconButton} {...props}>
      {children}
    </button>
  )
);

IconButton.displayName = 'IconButton';
export default IconButton;
