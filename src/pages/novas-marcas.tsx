import Image from 'next/image';
import {
  Box,
  Flex,
  Grid,
  chakra,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Head, Header, Container } from '../components/Layout';
import Contato from '../components/Layout/Contato';
import Footer from '../components/Layout/Footer';

interface PlataformaProps {
  nome: string;
  descricao: string;
  iconeUrl: string;
  href: string;
  reverse?: boolean;
}

function Plataforma({
  nome,
  descricao,
  iconeUrl,
  href,
  reverse = false,
}: PlataformaProps) {
  return (
    <chakra.div
      backgroundColor="background.dark"
      color="white"
      marginTop="4rem"
      padding="2rem"
    >
      <Flex
        direction={{
          base: 'column-reverse',
          md: reverse ? 'row-reverse' : 'row',
        }}
        alignItems="flex-start"
      >
        <Text fontSize="1.5rem" flex="1" align={{ base: 'center', md: 'left' }}>
          {descricao}
          <br />
          <br />
          Seu endereço: &nbsp;
          <chakra.a href={href}>{href}</chakra.a>
        </Text>
        <chakra.figure
          width={{ base: '100%', md: 'auto' }}
          textAlign="center"
          backgroundColor="white"
          padding="1rem"
          margin={{
            base: '-4rem auto 2rem auto',
            md: reverse ? '-4rem 2rem 0 0' : '-4rem 0 0 2rem',
          }}
        >
          <Image
            src={iconeUrl}
            alt={nome}
            width={240}
            height={160}
            layout="fixed"
          />
        </chakra.figure>
      </Flex>
    </chakra.div>
  );
}

export default function QuemSomos(): JSX.Element {
  return (
    <>
      <Head
        title="Novas marcas | FV Gestão"
        description="Estamos renovando nossas marcas"
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <chakra.figure
            width="100%"
            height={{ base: '380px', md: '360px', lg: '360px', xl: '420px' }}
            backgroundImage={{
              base: 'url(/img/pagina-novas-marcas-sm.jpg)',
              md: 'url(/img/pagina-novas-marcas-lg.jpg)',
            }}
            backgroundRepeat="no-repeat"
            backgroundPosition={{
              base: 'center right',
              md: 'center center',
              lg: 'top center',
            }}
            backgroundSize="cover"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(90deg, #292f38 0%, rgba(41,47,56,0) 100%)',
            }}
          >
            <Container
              maxWidth="920px"
              display="flex"
              flexDirection="column"
              position="relative"
            >
              <chakra.div
                maxWidth={{ base: '80%', md: '520px' }}
                paddingBottom="1rem"
              >
                <Heading as="h1" color="white">
                  A FV Gestão está renovando as suas marcas
                </Heading>
                <Text
                  color="white"
                  fontSize="1.5rem"
                  display={{ base: 'none', md: 'block' }}
                >
                  Para melhorar a comunicação com os nossos clientes, estamos
                  renovando nossos produtos. Você já pode perceber essa mudança
                  na tela de login de nossas plataformas.
                </Text>
              </chakra.div>
            </Container>
          </chakra.figure>

          <chakra.div backgroundColor="#E5E5E5" padding="2rem 0" margin="0">
            <Container maxWidth="790px" paddingBottom="2rem">
              <Text
                fontSize="1.5rem"
                textAlign="justify"
                marginTop="2rem"
                display={{ base: 'block', md: 'none' }}
              >
                Para melhorar a comunicação com os nossos clientes, estamos
                renovando nossos produtos. Você já pode perceber essa mudança na
                tela de login de nossas plataformas.
              </Text>

              <Text
                fontSize="1.5rem"
                textAlign="justify"
                marginTop={{ base: '2rem', md: '0' }}
              >
                E nossas plataformas também ganharam identidade própria, que
                você poderá conhecer abaixo:
              </Text>
            </Container>

            <Container maxWidth="920px">
              <VStack spacing="6rem">
                <Plataforma
                  nome="Otimizze"
                  descricao="O nosso sistema de avaliação e diagnóstico organizacional agora é conhecido como Otimizze."
                  iconeUrl="/img/plataformas/otimizze-logo.png"
                  href="https://otimizze.fvgestao.com.br"
                />

                <Plataforma
                  nome="Perfforme"
                  descricao="O sistema de desenvolvimento do seu colaborador passará a se chamar de Perfforme."
                  iconeUrl="/img/plataformas/perfforme-logo.png"
                  href="https://perfforme.fvgestao.com.br"
                  reverse
                />

                <Plataforma
                  nome="Capacitte"
                  descricao="A nossa universidade corporativa agora recebeu o nome de Capacitte."
                  iconeUrl="/img/plataformas/capacitte-logo.png"
                  href="https://capacitte.fvgestao.com.br"
                />

                <Plataforma
                  nome="Levantt"
                  descricao="E ainda há a nossa ferramenta de pesquisa de satisfação, o Levantt, que não recebeu um novo nome, mas recebeu um retoque em sua marca."
                  iconeUrl="/img/plataformas/levantt-logo.png"
                  href="https://www.levantt.com.br"
                  reverse
                />
              </VStack>
            </Container>
          </chakra.div>
        </Box>
        <Contato pagina="Novas marcas" />
        <Footer />
      </Flex>
    </>
  );
}
