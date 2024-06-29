import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const headerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3.6rem',
  marginBottom: 12,
});

const headingContainerStyle = style({});

const headingStyle = style({
  marginTop: 0,
  marginBottom: 0,
  fontSize: vars.fontSize.lg,
});
const smallHeadingStyle = style([
  headingStyle,
  {
    fontSize: vars.fontSize.md,
  },
]);

const subHeadingStyle = style({
  marginTop: 0,
  marginBottom: 0,
  color: vars.color.mutedForeground,
  fontSize: vars.fontSize.sm,
  fontWeight: 400,
});

const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export {
  buttonListStyle,
  headerStyle,
  headingContainerStyle,
  headingStyle,
  smallHeadingStyle,
  subHeadingStyle,
};
