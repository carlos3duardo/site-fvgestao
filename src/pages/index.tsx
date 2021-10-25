import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import {
  Clientes,
  Depoimentos,
  DesenvolvimentoEmpresarial,
  Plataformas,
  QuemSomos,
  SejaFranqueado,
  WelcomeBanner,
} from '../components/Home';
import { Header } from '../components/Layout';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';
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
          <DesenvolvimentoEmpresarial />
          <Plataformas />
          <Clientes />
          <Depoimentos />
          <SejaFranqueado />
        </Box>
        <Contato />
        <Footer />
        <ViewBreakpoint />
      </Flex>
    </>
  );
}
