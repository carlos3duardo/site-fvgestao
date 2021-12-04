import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/fonts.css';

import theme from '../styles/themes/default';
import ViewBreakpoint from '../components/Layout/ViewBreakpoint';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ViewBreakpoint />
    </ChakraProvider>
  );
}

export default MyApp;
