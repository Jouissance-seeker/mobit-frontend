import LocalFont from 'next/font/local';

const fontIransansx = LocalFont({
  src: [
    {
      path: '../../assets/fonts/thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/ultraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/demiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/extraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iransansx',
  style: 'normal',
  display: 'block',
});

export default fontIransansx;
