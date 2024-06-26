import { style } from '@vanilla-extract/css';

const formLabelStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginBottom: 20,
  ':last-child': {
    marginBottom: 0,
  },
});

export { formLabelStyle };
