// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        backgroundColor: 'background.light',
        paddingTop: '6rem',
      },
      a: {
        color: '#ff9d24',
        _hover: {
          color: '#b66400',
        },
      },
    },
  },
  fonts: {
    body: 'adineue PRO, Ubuntu, Helvetica, Arial, sans-serif',
    heading: 'adineue PRO, Ubuntu, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    regular: 400,
    semibold: 700,
    bold: 700,
    black: 900,
  },
  colors: {
    background: {
      dark: '#161b23',
      light: '#292f38',
      lighter: '#343c45',
      gray: '#d6d6d6',
      grayLight: '#e5e5e5',
    },
    gradient: {
      primary: 'linear-gradient(90deg, #F83600 0%, #FE8C00 100%)',
    },
    primary: {
      50: '#DFE7EF',
      100: '#BECEDE',
      200: '#9EB6CE',
      300: '#7D9DBE',
      400: '#5D85AD',
      500: '#496D90',
      600: '#395571',
      700: '#304860',
      800: '#283C50',
      900: '#203040',
    },
    orange: {
      50: '#ffdeb6',
      100: '#ffce92',
      200: '#ffbd6d',
      300: '#ffad49',
      400: '#ff9d24',
      500: '#fe8c00',
      600: '#db7800',
      700: '#b66400',
      800: '#925000',
      900: '#6d3c00',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
