import { style } from '@vanilla-extract/css';

import { inputStyle } from './input.css';

const selectStyle = style([
  inputStyle,
  {
    appearance: 'none',
    WebkitAppearance: 'none',
  },
]);

export { selectStyle };
