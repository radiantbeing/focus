import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const iconButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.6rem',
  height: '3.6rem',
  padding: 0,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 8,
  backgroundColor: 'transparent',
  fontSize: vars.fontSize.md,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.muted,
  },
});
