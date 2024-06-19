import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from '@vanilla-extract/css';

const lineSeedKR = 'LINE Seed KR';
const tinos = 'Tinos';

export const vars = createGlobalTheme(':root', {
  color: {
    black: '#222222',
    gray: '#616161',
    lightGray: '#f7f7f7',
  },
  fonts: {
    brand: tinos,
    heading: lineSeedKR,
    body: lineSeedKR,
  },
  fontSize: {
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
  },
});

globalFontFace(lineSeedKR, [
  {
    src: 'url(/fonts/line-seed-kr/line-seed-kr-thin.woff2) format(woff2), url(/fonts/line-seed-kr/line-seed-kr-thin.woff) format(woff)',
    fontWeight: 100,
  },
  {
    src: 'url(/fonts/line-seed-kr/line-seed-kr-regular.woff2) format(woff2), url(/fonts/line-seed-kr/line-seed-kr-regular.woff) format(woff)',
    fontWeight: 400,
  },
  {
    src: 'url(/fonts/line-seed-kr/line-seed-kr-bold.woff2) format(woff2), url(/fonts/line-seed-kr/line-seed-kr-bold.woff) format(woff)',
    fontWeight: 700,
  },
]);

globalFontFace(tinos, [
  {
    src: 'url(/fonts/tinos/tinos-regular.woff2) format(woff2), url(/fonts/tinos/tinos-regular.woff) format(woff)',
    fontWeight: 400,
  },
  {
    src: 'url(/fonts/tinos/tinos-bold.woff2) format(woff2), url(/fonts/tinos/tinos-bold.woff) format(woff)',
    fontWeight: 700,
  },
]);

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  color: vars.color.black,
  fontFamily: `"${lineSeedKR}", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  fontSize: '1.6rem',
});

globalStyle('input, button', {
  fontFamily: 'inherit',
});
