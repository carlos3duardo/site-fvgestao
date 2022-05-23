import Image from 'next/image';
import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Container } from '../../Layout';

interface LineDotsProps {
  reverse?: boolean;
}

function Dots({ reverse = false }: LineDotsProps): JSX.Element {
  return (
    <chakra.figure
      display={{ base: 'none', md: 'block' }}
      width={{ base: '100%', md: '440px', lg: '664px', xl: '724px' }}
      height={{ base: '120px', md: '124px', lg: '155px', xl: '156px' }}
      backgroundImage={{
        base: 'none',
        md: reverse
          ? 'url(/img/app-dots-md-reverse.svg)'
          : 'url(/img/app-dots-md.svg)',
        lg: reverse
          ? 'url(/img/app-dots-lg-reverse.svg)'
          : 'url(/img/app-dots-lg.svg)',
        xl: reverse
          ? 'url(/img/app-dots-xl-reverse.svg)'
          : 'url(/img/app-dots-xl.svg)',
      }}
      backgroundSize="cover"
    />
  );
}

interface PlataformaProps {
  iconeUrl: string;
  nome: string;
  descricao: string;
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
    <Flex
      alignItems="center"
      direction={{ base: 'column', md: reverse ? 'row-reverse' : 'row' }}
    >
      <chakra.figure w="300px" textAlign="center">
        <Image
          src={iconeUrl}
          alt={nome}
          width={240}
          height={160}
          layout="fixed"
        />
      </chakra.figure>
      <chakra.div
        textAlign={{ base: 'center', md: reverse ? 'right' : 'left' }}
      >
        <Text
          fontSize="1.5rem"
          flex="1"
          textAlign={{ base: 'center', md: reverse ? 'right' : 'left' }}
          marginBottom="0.5rem"
        >
          {descricao}
        </Text>
        <Link href={href} passHref>
          <Button
            as="a"
            colorScheme="orange"
            variant="outline"
            borderWidth="2px"
            borderRadius="99px"
            size="sm"
            _hover={{
              background: 'orange.50',
            }}
            _active={{
              background: 'orange.500',
              borderColor: 'orange.500',
              textColor: '#ffffff',
            }}
          >
            saiba mais
          </Button>
        </Link>
      </chakra.div>
    </Flex>
  );
}

export default function Plataformas(): JSX.Element {
  return (
    <Box padding="4rem 0" color="primary.500" backgroundColor="gray.100">
      <Container
        width="100%"
        maxWidth={{ base: '100%', md: '48em', lg: '62em', xl: `container.lg` }}
      >
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
          marginBottom="3rem"
        >
          PLATAFORMAS
        </Heading>
        <VStack spacing={{ base: '3rem', md: '0' }}>
          <Plataforma
            nome="Otimizze"
            iconeUrl="/img/plataformas/otimizze-logo.png"
            descricao="Avalia os pontos de melhorias, cria planos de ação e gerencia tudo no ambiente da plataforma."
            href="/plataforma/otimizze"
          />

          <Dots />

          <Plataforma
            nome="Perfforme"
            iconeUrl="/img/plataformas/perfforme-logo.png"
            descricao="Avalia os seus colaboradores, dá feedbacks para os mesmos e constrói o plano de desenvolvimento individual."
            href="/plataforma/perfforme"
            reverse
          />

          <Dots reverse />

          <Plataforma
            nome="Capacitte"
            iconeUrl="/img/plataformas/capacitte-logo.png"
            descricao="Cria a universidade corporativa da organização construindo um ambiente de aprendizado a partir de um conteúdo específico para o desenvolvimento dos colaboradores."
            href="/plataforma/capacitte"
          />

          <Dots />

          <Plataforma
            nome="Levantt"
            iconeUrl="/img/plataformas/levantt-logo.png"
            descricao="Acompanha e mede o grau de satisfação em tempo real para desenvolver um plano de lealdade para os seus clientes."
            href="/plataforma/levantt"
            reverse
          />
        </VStack>
      </Container>
    </Box>
  );
}
