import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const headerRoot = style({
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 56,
  paddingLeft: 20,
  paddingRight: 20,
  borderBottom: `1px solid ${vars.color.border}`,
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
});

export const headerBrand = style({
  color: vars.color.foreground,
  fontFamily: vars.fonts.brand,
  fontSize: vars.fontSize.lg,
  fontWeight: 400,
  textDecoration: 'none',
});
