import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

export const heading = style({
  marginTop: 20,
  marginBottom: 20,
  fontSize: vars.fontSize.lg,
});
