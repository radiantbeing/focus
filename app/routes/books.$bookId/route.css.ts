import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const coverImageStyle = style({
  height: 200,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 4,
  backgroundColor: vars.color.muted,
  objectFit: 'contain',
});

export { coverImageStyle };
