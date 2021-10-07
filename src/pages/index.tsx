import { Box, chakra, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { QuemSomos, WelcomeBanner } from '../components/Home';
import { Header } from '../components/Layout';
import ViewBreakpoint from '../components/Layout/ViewBreakpoint';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>FV Gestão</title>
      </Head>
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />

        <Box flex="1">
          <WelcomeBanner />
          <QuemSomos />
        </Box>

        <chakra.footer bgColor="red.100">footer</chakra.footer>
        <ViewBreakpoint />
      </Flex>
    </>
  );
}
