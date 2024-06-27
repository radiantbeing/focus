import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const rootStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 20,
});

const itemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: 150,
  padding: 16,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 8,
});

const headingStyle = style({
  margin: 0,
  fontSize: vars.fontSize.md,
  fontWeight: 400,
});

const descriptionStyle = style({
  alignSelf: 'center',
  margin: 0,
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
});

const helpTextStyle = style({
  margin: 0,
  fontWeight: 400,
});

export { descriptionStyle, headingStyle, helpTextStyle, itemStyle, rootStyle };
