// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
      },
    },
  },
  fonts: {
    body: 'Ubuntu, Helvetica, Arial, sans-serif',
    heading: 'Ubuntu, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    normal: 400,
    regular: 400,
    semibold: 500,
    bold: 700,
  },
  colors: {
    background: {
      dark: '#2C3E50',
      light: '#34495E',
      lighter: '#395571',
      gray: '#e5e5e5',
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
