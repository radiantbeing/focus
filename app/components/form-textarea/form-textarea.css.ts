import { style } from '@vanilla-extract/css';

import { inputStyle } from '../form-input/form-input.css';

const formTextareaStyle = style([
  inputStyle,
  {
    maxWidth: '100%',
    height: 64,
    paddingTop: 8,
    paddingBottom: 8,
    lineHeight: 'inherit',
  },
]);

export { formTextareaStyle };
