import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const containerStyle = style({
  marginBottom: 20,
  padding: 16,
  border: `1px solid ${vars.color.border}`,
  borderRadius: 8,
});

const headerStyle = style({
  marginBottom: 24,
  fontSize: vars.fontSize.md,
  fontWeight: 700,
});

const listStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  listStyle: 'none',
});

const itemStyle = style({
  display: 'flex',
  gap: 12,
});

const linkStyle = style({
  display: 'flex',
  gap: 12,
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

const imageStyle = style({
  width: 48,
  height: 48,
  backgroundColor: vars.color.foreground,
});

const detailsStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const headingStyle = style({
  marginTop: 0,
  marginBottom: 0,
  fontSize: vars.fontSize.md,
});

export {
  containerStyle,
  detailsStyle,
  headerStyle,
  headingStyle,
  imageStyle,
  itemStyle,
  linkStyle,
  listStyle,
};
