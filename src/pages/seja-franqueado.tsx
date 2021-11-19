import {
  Box,
  Flex,
  Icon,
  Button,
  chakra,
  Heading,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MdPlayCircleOutline } from 'react-icons/md';

import { Container, Header } from '../components/Layout';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';
import ViewBreakpoint from '../components/Layout/ViewBreakpoint';
import { Depoimentos } from '../components/Home';

export default function SejaFranqueado(): JSX.Element {
  return (
    <>
      <Head>
        <title>FV Gestão | Seja um franqueado</title>
      </Head>
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1" marginTop="96px">
          <chakra.div bgColor="background.grayLight" padding="5rem 0">
            <Container
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <chakra.div
                flex="1"
                textAlign={{ base: 'center', lg: 'left' }}
                mb={{ base: '3rem', lg: '0' }}
              >
                <Heading as="h2" fontSize="3rem" mb="1rem" color="orange.500">
                  Faça parte da nossa história!
                </Heading>
                <Text fontSize="1.85rem" mb="1rem">
                  A atuação da FVGestão é pautada pela simplicidade,
                  objetividade e praticidade.
                </Text>
                <Link href="/quem-somos" passHref>
                  <Button
                    as="a"
                    colorScheme="orange"
                    variant="outline"
                    borderWidth="2px"
                    borderRadius="99px"
                    _hover={{
                      background: 'orange.50',
                    }}
                    _active={{
                      background: 'orange.500',
                      borderColor: 'orange.500',
                      textColor: '#ffffff',
                    }}
                  >
                    Quero saber mais
                  </Button>
                </Link>
              </chakra.div>
              <chakra.figure
                width={{ base: '100%', lg: '520px', xl: '640px' }}
                height={{ base: '260px', md: '420px' }}
                margin={{ base: '0 0 2rem 0', lg: '0 0 0 2rem' }}
                padding="1rem"
                backgroundImage="/img/seja-franqueado-video-capa.jpg"
                backgroundRepeat="no-repeat"
                backgroundPosition="center center"
                backgroundSize="cover"
                backgroundColor="orange.100"
                borderRadius="0.5rem"
                boxShadow="0 .175rem .175rem rgba(0, 0, 0, 0.15)"
              >
                <Flex
                  width="100%"
                  height="100%"
                  borderWidth="2px"
                  borderColor="orange.500"
                  borderRadius=".5rem"
                  transition="all 0.2s ease"
                  align="center"
                  justify="center"
                  _hover={{
                    backgroundColor: 'rgba(254, 140, 0, 0.2)',
                  }}
                >
                  <Icon
                    as={MdPlayCircleOutline}
                    w="4rem"
                    h="4rem"
                    color="white"
                  />
                </Flex>
              </chakra.figure>
            </Container>
          </chakra.div>
        </Box>

        <Box
          padding={{ base: '0', md: '5rem 0' }}
          backgroundImage="url(/img/seja-franqueado-mulher.jpg)"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundSize="cover"
        >
          <Container
            padding={{ base: '0', md: '0 2rem', xl: '0' }}
            display="flex"
            flexDirection="row-reverse"
          >
            <Box
              padding="3rem"
              width={{ base: '100%', lg: '600px' }}
              color="gray.200"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'background.light',
                borderRadius: { base: '0', md: '0.75rem' },
                width: '100%',
                height: '100%',
                opacity: '0.9',
                zIndex: '0',
              }}
            >
              <Heading
                as="h2"
                fontSize={{ base: '1.75rem', md: '2.5rem' }}
                color="orange.500"
                marginBottom="1rem"
                position="relative"
                zIndex="1"
              >
                Seja um franqueado
              </Heading>
              <chakra.div
                fontSize="1.5rem"
                marginBottom="1rem"
                position="relative"
                zIndex="1"
              >
                <Text mb="1.5rem">
                  O método da FVGestão é prático, objetivo e inovador, tudo o
                  que precisamos nessa nova Era.
                </Text>
                <Text mb="1.5rem">
                  Devido à crescente procura, decidimos transformar a nossa
                  expertise e estrutura em uma franquia, para construir uma rede
                  de parceiros antenados com as transformações geradas na gestão
                  de negócios por um dos segmentos que mais crescem no país: o
                  das plataformas digitais.
                </Text>
                <Text mb="1.5rem">
                  A FVGestão busca parceiros com perfil empreendedor, de
                  liderança e proatividade, consultores que procuram plataformas
                  de gestão para integrá-las aos seus serviços.
                </Text>
                <Text mb="1.5rem">
                  O nosso modelo de franquia tem uma característica flexível
                  para o empreendedor: pode funcionar em um sistema “Home
                  Based”, que dispensa a necessidade de um ponto comercial
                  físico (escritório).
                </Text>
                <Text mb="1.5rem">
                  O franqueado terá à sua disposição as nossas quatro
                  plataformas (Otimizze, DHO, Universidade Corporativa e
                  Levantt), podendo criar e gerenciar a sua própria carteira de
                  clientes.
                </Text>
                <Text>
                  Com o nosso método, facilidade e inovação caminham juntas.
                </Text>
              </chakra.div>
            </Box>
          </Container>
        </Box>

        <Depoimentos />

        <Contato />

        <Footer />

        <ViewBreakpoint />
      </Flex>
    </>
  );
}
