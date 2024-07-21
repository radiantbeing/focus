import * as React from 'react';

import { helpTextStyle } from './cover-help-text.css';

type NativePProps = React.ComponentProps<'p'>;
const CoverHelpText = ({ children, ...props }: NativePProps) => (
  <p className={helpTextStyle} {...props}>
    {children}
  </p>
);

export { CoverHelpText };
