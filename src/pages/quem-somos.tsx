import { Box, Flex, Grid, chakra, Heading, Text } from '@chakra-ui/react';
import { Head, Header, Container } from '../components/Layout';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';

export default function QuemSomos(): JSX.Element {
  return (
    <>
      <Head
        title="Quem Somos | FV Gestão"
        description="Conheça mais sobre a nossa empresa e a nossa história"
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <chakra.figure
            width="100%"
            height={{ base: '380px', md: '360px', lg: '360px', xl: '420px' }}
            backgroundImage="url(/img/pagina-quem-somos.png)"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            backgroundSize="cover"
          />

          <chakra.div backgroundColor="#E5E5E5" padding="4rem 0">
            <Container maxWidth="920px">
              <Heading as="h1" textAlign="center" textTransform="uppercase">
                Sobre nós
              </Heading>
              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                A força de uma ideia se impõe quando ela precisa acontecer, na
                prática. Assim nasceu a FVGestão, no início de 2018, a partir da
                ideia de três sócios motivados pelo propósito de atuar na
                transformação da gestão das empresas brasileiras.
              </Text>
              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                Presente em 11 estados brasileiros, a FVGestão alcançou um
                propósito: a satisfação de todos os clientes que usam as nossas
                plataformas. Sabe o que eles têm em comum? A sede de
                conhecimento para se solidificar no mercado.
              </Text>
              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                Unindo conceitos de tecnologia e gestão, com foco em inovação e
                resultados, nosso método tem por base quatro plataformas:
                Sistema de Avaliação Gerencial, DHO – Desenvolvimento Humano
                Organizacional, Universidade Corporativa e Levantt. Todos eles
                fazem parte dos programas de desenvolvimento gerencial de
                inúmeros grupos empresariais brasileiros.
              </Text>
            </Container>
            <Container maxWidth="1024px" marginTop="4rem">
              <Grid
                templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
                gap="2rem"
              >
                <chakra.div>
                  <Heading
                    as="h2"
                    fontSize="2rem"
                    textAlign="center"
                    textTransform="uppercase"
                  >
                    Propósito
                  </Heading>
                  <Text fontSize="1.25rem" textAlign="center">
                    Promover uma cultura vencedora.
                  </Text>
                </chakra.div>
                <chakra.div>
                  <Heading
                    as="h2"
                    fontSize="2rem"
                    textAlign="center"
                    textTransform="uppercase"
                  >
                    Missão
                  </Heading>
                  <Text fontSize="1.25rem" textAlign="center">
                    Aprimorar a gestão usando tecnologias e educação
                    corporativa.
                  </Text>
                </chakra.div>
                <chakra.div>
                  <Heading
                    as="h2"
                    fontSize="2rem"
                    textAlign="center"
                    textTransform="uppercase"
                  >
                    Valores
                  </Heading>
                  <Text fontSize="1.25rem" textAlign="center">
                    Confiança, Inovação, Adaptabilidade, Aprendizado e Sinergia.
                  </Text>
                </chakra.div>
              </Grid>
            </Container>
          </chakra.div>
        </Box>
        <Contato pagina="Quem Somos" />
        <Footer />
      </Flex>
    </>
  );
}
