import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const headerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3.6rem',
  marginBottom: 12,
});

const headingStyle = style({
  fontSize: vars.fontSize.lg,
});

const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export { buttonListStyle, headerStyle,headingStyle };
