import {
  Box,
  Flex,
  Icon,
  chakra,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { MdPlayCircleOutline } from 'react-icons/md';

import { Container, Header } from '../../components/Layout';
import Contato from '../../components/Layout/Contato';
import Footer from '../../components/Layout/Footer';
import ViewBreakpoint from '../../components/Layout/ViewBreakpoint';
import { Depoimentos } from '../../components/Home';

export default function Otimizze(): JSX.Element {
  return (
    <>
      <Head>
        <title>FV Gestão | Quem Somos</title>
      </Head>
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1" marginTop="96px">
          <Box bgColor="#e5e5e5" padding="5rem 0">
            <Container>
              <Flex
                width="100%"
                align="center"
                direction={{ base: 'column', lg: 'row' }}
              >
                <chakra.div flex="1" textColor="primary.800">
                  <chakra.figure w="300px">
                    <Image
                      src="/img/app-otimizze.png"
                      alt="Otimizze"
                      width={229}
                      height={160}
                      layout="fixed"
                    />
                  </chakra.figure>
                  <Text fontSize="1.5rem" m="1rem 0">
                    Gerencie a rotina de implementação das oportunidades de
                    melhoria da sua gestão.
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
                      mais detalhes
                    </Button>
                  </Link>
                </chakra.div>
                <chakra.figure
                  width={{ base: '100%', lg: '520px', xl: '640px' }}
                  height={{ base: '260px', md: '420px' }}
                  margin={{ base: '0 0 2rem 0', lg: '0 2rem 0 0' }}
                  padding="1rem"
                  backgroundImage="/img/video-cover-otimizze.jpg"
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
              </Flex>
            </Container>
          </Box>
        </Box>

        <Box
          padding={{ base: '0', md: '5rem 0' }}
          backgroundImage="url(/img/app-otimizze-page-background.jpg)"
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
                Otimize os processos de gestão
              </Heading>
              <Text
                fontSize="1.25rem"
                marginBottom="1rem"
                position="relative"
                zIndex="1"
              >
                A plataforma atua em duas frentes: empresas e consultores.
                <br />
                <br />
                Os consultores atuam utilizando todos os recursos
                disponibilizados pela plataforma para avaliar a gestão das
                empresas de sua base, também acompanha o progresso dos planos de
                ação através do KANBAN.
                <br />
                <br />
                As empresas participam diretamente do processo aplicando
                autoavaliações, cadastrando os seus colaboradores e gerenciando
                a praxe da execução das melhorias voltadas para o incremento da
                gestão.
                <br />
                <br />O KANBAN também está disponível para essas empresas.
              </Text>

              <Link href="#quem-somos" passHref>
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
                  mais detalhes
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>

        <Box padding="5rem 0" bgColor="#e5e5e5">
          <Container maxWidth="920px">
            <Heading as="h1" textAlign="center" textTransform="uppercase">
              Aumente os resultados
            </Heading>
            <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
              Os resultados são transformadores e indispensáveis para a melhoria
              contínua, independentemente do porte da empresa.
            </Text>
            <UnorderedList fontSize="1.5rem" margin="2rem 0 0 2rem">
              <ListItem>Avaliação do nível de maturidade da gestão</ListItem>
              <ListItem>Auditorias</ListItem>
              <ListItem>
                Elaboração de comentários e oportunidades de melhoria
              </ListItem>
              <ListItem>
                Criação de planos de ação e acompanhamento da implementação de
                melhorias por meio do Kanban
              </ListItem>
              <ListItem>
                Criação de quadros para a gestão de atividades internas
              </ListItem>
            </UnorderedList>
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
