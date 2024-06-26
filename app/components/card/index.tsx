import * as React from 'react';

import { cardStyle } from './card.css';

type NativeDivProps = React.ComponentProps<'div'>;
const Card = ({ children, ...props }: NativeDivProps) => (
  <div {...props} className={cardStyle}>
    {children}
  </div>
);
Card.displayName = 'Card';

export { Card };
