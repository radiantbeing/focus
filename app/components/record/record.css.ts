import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const recordRoot = style({
  marginBottom: 20,
  padding: 16,
  borderRadius: 8,
  backgroundColor: vars.color.lightGray,
});

export const recordHeader = style({
  marginBottom: 24,
  fontSize: vars.fontSize.md,
  fontWeight: 700,
});

export const recordList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  listStyle: 'none',
});

export const recordItem = style({
  display: 'flex',
  gap: 12,
});

export const recordItemLink = style({
  display: 'flex',
  gap: 12,
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const recordItemImage = style({
  width: 48,
  height: 48,
  backgroundColor: vars.color.black,
});

export const recordItemDetails = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const recordItemTitle = style({
  marginTop: 0,
  marginBottom: 0,
  fontSize: vars.fontSize.md,
});

export const recordItemDescription = style({});
