import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const inputStyle = style({
  height: '3.6rem',
  paddingLeft: 12,
  paddingRight: 12,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 4,
  fontSize: vars.fontSize.md,
  ':focus-visible': {
    outline: 'none',
    boxShadow: `0 0 0 1px ${vars.color.background}, 0 0 0 2px ${vars.color.ring}`,
  },
  '::placeholder': {
    color: vars.color.mutedForeground,
  },
});

export { inputStyle };
