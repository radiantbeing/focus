import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const navRoot = style({
  position: 'fixed',
  bottom: 0,
  width: 'inherit',
  maxWidth: 'inherit',
});

export const navList = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 72,
  margin: 0,
  paddingRight: 20,
  paddingLeft: 20,
  backgroundColor: '#ffffff',
  borderTop: `1px solid ${vars.color.border}`,
  listStyle: 'none',
});

export const navItem = style({
  flex: 1,
});

export const navLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  color: vars.color.foreground,
  fontSize: vars.fontSize.sm,
  textDecoration: 'none',
});
