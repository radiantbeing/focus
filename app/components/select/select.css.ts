import { style } from '@vanilla-extract/css';

import { inputStyle } from '../form-input/form-input.css';

const selectStyle = style([
  inputStyle,
  {
    appearance: 'none',
    WebkitAppearance: 'none',
  },
]);

export { selectStyle };
