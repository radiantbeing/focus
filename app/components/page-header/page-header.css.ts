import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const pageHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3.6rem',
  marginBottom: 12,
});

export const pageHeaderTitle = style({
  fontSize: vars.fontSize.lg,
});

export const pageHeaderButtonList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
