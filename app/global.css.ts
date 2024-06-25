import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from '@vanilla-extract/css';

const lineSeedKR = 'LINE Seed KR';
const tinos = 'Tinos';

export const vars = createGlobalTheme(':root', {
  color: {
    foreground: '#09090B',
    mutedForeground: '#72717A',
    background: '#FFFFFF',
    muted: '#F4F4F5',
    border: '#E4E4E7',
    ring: '#A2A1AA',
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
  color: vars.color.foreground,
  fontFamily: `"${lineSeedKR}", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  fontSize: '1.6rem',
});

globalStyle('input, button, textarea, select', {
  fontFamily: 'inherit',
});
