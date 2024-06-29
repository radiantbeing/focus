import { style } from '@vanilla-extract/css';

import { vars } from '~/global.css';

import { inputStyle } from './input.css';

const selectStyle = style([
  inputStyle,
  {
    backgroundColor: 'transparent',
    backgroundImage:
      'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>\')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 10px) 50%',
    color: vars.color.foreground,
    appearance: 'none',
    WebkitAppearance: 'none',
  },
]);

export { selectStyle };
