import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginBottom: 20,
});

export const fieldset = style({
  minWidth: 'unset',
  margin: 0,
  padding: 16,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 8,
});

export const input = style({
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

export const fileInputWrapper = style([
  input,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
]);
