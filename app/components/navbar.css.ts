import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

const navStyle = style({
  position: 'fixed',
  bottom: 0,
  width: 'inherit',
  maxWidth: 'inherit',
  backgroundColor: vars.color.background,
  '@media': {
    'all and (display-mode: standalone)': {
      paddingBottom: 8,
    },
  },
});

const listStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 72,
  margin: 0,
  paddingRight: 20,
  paddingLeft: 20,
  borderTop: `1px solid ${vars.color.border}`,
  listStyle: 'none',
});

const itemStyle = style({
  flex: 1,
});

const linkStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  color: vars.color.foreground,
  fontSize: vars.fontSize.sm,
  textDecoration: 'none',
});

export { itemStyle, linkStyle, listStyle, navStyle };
