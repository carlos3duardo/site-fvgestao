import {
  Box,
  Flex,
  Grid,
  GridItem,
  chakra,
  Heading,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';

import { Container, Header } from '../components/Layout';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';

export default function Levantt(): JSX.Element {
  return (
    <>
      <Head>
        <title>FV Gestão | Levantt</title>
      </Head>
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1" marginTop="96px">
          <chakra.figure
            width="100%"
            height={{ base: '516px', xl: '580px' }}
            padding="4.375rem 0"
            backgroundImage="url(/img/home-desenvolvimento-empresarial-background.jpg)"
            backgroundRepeat="no-repeat"
            backgroundPosition="center 85%"
            backgroundSize="cover"
            display="flex"
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="center"
            color="background.dark"
          >
            <Container>
              <Heading as="h1" fontSize="2.5rem" textAlign="center">
                Programa de Desenvolvimento Empresarial
              </Heading>
            </Container>
          </chakra.figure>

          <chakra.div
            padding="5rem 0"
            bgColor="background.light"
            color="gray.100"
            fontSize="1.5rem"
          >
            <Container maxW="1024px">
              <Text mb="1.5rem">
                Este programa nasceu a partir de um insight conjunto dos nossos
                sócios, que por conhecerem o meio empresarial, enxergaram que
                para um bom trabalho ser feito, é preciso que os líderes de um
                determinado grupo proporcionem um ambiente harmonioso para os
                seus colaboradores. Analisando este insight, a FVGestão chegou a
                algumas conclusões: é preciso medir, acompanhar e capacitar o
                time que faz a empresa andar, independentemente do estágio em
                que ela esteja.
              </Text>
              <Text mb="1.5rem">
                Baseando-se nos componentes apresentados na figura abaixo, o
                foco das iniciativas a serem desenvolvidas é gerar um impacto
                direto nos aspectos gerenciais dos participantes do programa, de
                modo que o principal outcome esteja atrelado ao reflexo melhoria
                da performance dos processos e indicadores do negócio.
              </Text>
              <Text mb="1.5rem">
                Observando os componentes apresentados na figura abaixo, a FV
                anseia que estes componentes auxiliares gerem um impacto direto
                na rotina diária dos colaboradores de uma organização,
                inspirando-os a crescer dentro da própria empresa e a fazendo
                crescer consequentemente, é aí que surge o chamado
                &quot;outcome&quot;.
              </Text>

              <Flex direction={{ base: 'column', md: 'row' }}>
                <chakra.figure
                  position="relative"
                  margin={{
                    base: '0rem 0rem 1.5rem 0rem',
                    md: '0rem 1.5rem 1.5rem 0rem',
                  }}
                  backgroundImage="/img/man-on-the-laptop.jpg"
                  backgroundRepeat="no-repeat"
                  backgroundPosition="center center"
                  backgroundSize="cover"
                  width={{ base: '100%', md: '40%', lg: '50%' }}
                  height={{ base: '340px', md: '530px' }}
                />
                <chakra.div flex="1">
                  <Text fontSize="1.5rem" mb="1.5rem">
                    A FVGestão possui expertise tanto na elaboração de modelos
                    personalizados para a avaliação de processos gerenciais,
                    como na aplicação do MEG 21 (Modelo de Excelência da Gestão
                    - 21ª edição) da FNQ – Fundação Nacional da Qualidade.
                  </Text>

                  <Heading as="h2" mb="1.5rem" color="orange.500">
                    Qual é o público-alvo do programa?
                  </Heading>

                  <Text fontSize="1.5rem" mb="1.5rem">
                    Grupos de empresas que desejam, em conjunto, iniciar uma
                    trilha de desenvolvimento empresarial; e grandes indústrias,
                    que querem implementar um programa de desenvolvimento dos
                    seus fornecedores.
                  </Text>
                </chakra.div>
              </Flex>
            </Container>
          </chakra.div>

          <chakra.div
            backgroundColor="gray.100"
            padding="5rem 0"
            color="background.dark"
          >
            <Container maxW="1024px">
              <Grid
                templateColumns={{ base: '1fr', md: '40% 60%' }}
                gap="1.5rem"
              >
                <GridItem>
                  <Heading
                    as="h2"
                    fontSize="2rem"
                    mb="1.2rem"
                    color="orange.500"
                  >
                    Case de sucesso
                  </Heading>
                  <Text fontSize="1.25rem">
                    O Grupo Energisa vem buscando, ao longo da sua história,
                    melhorias na sua gestão. Sabendo da importância que é o
                    desenvolvimento dos fornecedores, criou um programa em que
                    todos que participam evoluem de forma sustentável,
                    melhorando assim todo ecossistema. No projeto piloto, foi
                    aplicado o Modelo de Excelência da Gestão (na régua de 250
                    pontos), com os fornecedores das unidades Energisa Paraíba e
                    Borborema.
                  </Text>
                </GridItem>
                <GridItem>
                  <chakra.figure
                    position="relative"
                    margin={{
                      base: '0rem 0rem 1.5rem 0rem',
                      md: '0rem 1.5rem 1.5rem 0rem',
                    }}
                    backgroundImage="/img/case-energisa-01.jpg"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center right"
                    backgroundSize="cover"
                    width="100%"
                    height={{ base: '340px', md: '400px' }}
                  />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <Text fontSize="1.25rem">
                    Depois dessa iniciativa bem sucedida, o programa se tornou
                    permanente no Estado da Paraíba (sendo até hoje coordenado
                    pela FV Gestão e o Programa Paraibano da Qualidade) e,
                    agora, vem sendo difundido para todas as unidades de negócio
                    da holding, tendo sido nomeado como Programa SINERGISA. Para
                    o SINERGISA, que atualmente contempla fornecedores de mais
                    de 10 estados do país, desenvolvemos um Modelo de Referência
                    específico para as necessidades do Grupo Energisa, com uma
                    avaliação baseada em 7 temas e 35 práticas gerenciais.
                  </Text>
                </GridItem>
              </Grid>

              <Flex direction="row">
                <chakra.div width="50%" />
                <chakra.figure position="relative" mr="2rem" />
              </Flex>
            </Container>
          </chakra.div>
        </Box>

        <Contato pagina="Desenvolvimento Empresarial" />

        <Footer />
      </Flex>
    </>
  );
}
