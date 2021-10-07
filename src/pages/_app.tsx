import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/fonts.css';

import theme from '../styles/themes/default';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
