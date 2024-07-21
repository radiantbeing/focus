import { style } from '@vanilla-extract/css';

import { inputStyle } from './input.css';

const textareaStyle = style([
  inputStyle,
  {
    maxWidth: '100%',
    height: 78,
    paddingTop: 8,
    paddingBottom: 8,
    lineHeight: 'inherit',
  },
]);

export { textareaStyle };
