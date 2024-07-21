import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const helpTextStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  marginTop: 0,
  marginBottom: 0,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 4,
  color: vars.color.mutedForeground,
});

export { helpTextStyle };
