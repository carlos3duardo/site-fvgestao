import { Box, chakra, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import {
  Clientes,
  Depoimentos,
  DesenvolvimentoEmpresarial,
  Destaques,
  Plataformas,
  QuemSomos,
  SejaFranqueado,
} from '../components/Home';
import { Header } from '../components/Layout';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>FV Gestão</title>
      </Head>
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <Destaques />

          <chakra.div id="quem-somos">
            <QuemSomos />
          </chakra.div>

          <chakra.div id="desenvolvimento-empresarial">
            <DesenvolvimentoEmpresarial />
          </chakra.div>

          <chakra.div id="plataformas">
            <Plataformas />
          </chakra.div>

          <chakra.div id="clientes">
            <Clientes />
          </chakra.div>

          <chakra.div id="depoimentos">
            <Depoimentos />
          </chakra.div>

          <SejaFranqueado />
        </Box>
        <Contato pagina="Principal" />
        <Footer />
      </Flex>
    </>
  );
}
