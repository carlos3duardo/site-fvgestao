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

interface PlataformaProps {
  nome: string;
  descricao: string;
  iconeUrl: string;
  imagemUrl: string;
  href: string;
  reverse?: boolean;
}

function Plataforma({
  nome,
  descricao,
  iconeUrl,
  imagemUrl,
  href,
  reverse = false,
}: PlataformaProps) {
  return (
    <Box
      width="100%"
      backgroundImage="linear-gradient(to top, rgba(73, 75, 76, 0.2) , rgba(73, 75, 76, 0))"
      textColor="primary.700"
      padding="4rem 0"
    >
      <Flex
        direction={{ base: 'column', md: reverse ? 'row-reverse' : 'row' }}
        alignItems="center"
        width="100%"
        maxWidth={{ base: '100%', md: '48em', lg: '62em', xl: `container.lg` }}
        margin="0 auto"
      >
        <Flex
          alignItems="center"
          direction={{ base: 'column', md: 'column' }}
          width={{ base: '100%', md: '300px' }}
          margin={{ base: '0', md: reverse ? '0 0 0 4rem' : '0 4rem 0 0' }}
          padding={{ base: '0 1.5rem', md: '0' }}
        >
          <chakra.figure
            w="300px"
            textAlign={{ base: 'center', md: reverse ? 'left' : 'right' }}
          >
            <Image
              src={iconeUrl}
              alt={nome}
              width={240}
              height={160}
              layout="fixed"
            />
          </chakra.figure>
          <Box textAlign={{ base: 'center', md: reverse ? 'left' : 'right' }}>
            <Text fontSize="1.25rem" flex="1" marginBottom="0.5rem">
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
          </Box>
        </Flex>
        <Box flex="1" padding={{ base: '2rem 2rem 0 2rem', md: '0' }}>
          <chakra.img
            display="block"
            src={imagemUrl}
            alt={nome}
            maxHeight={{ base: 'auto', md: '380px' }}
            margin="0 auto"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default function Plataformas(): JSX.Element {
  return (
    <Box color="primary.500" backgroundColor="gray.100">
      <Container
        width="100%"
        maxWidth={{ base: '100%', md: '48em', lg: '62em', xl: `container.lg` }}
        padding="4rem 0"
      >
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
        >
          PLATAFORMAS
        </Heading>
      </Container>
      <VStack spacing={{ base: '2rem', md: '0' }}>
        <Plataforma
          nome="Otimizze"
          descricao="Avalia os pontos de melhorias, cria planos de ação e gerencia tudo no ambiente da plataforma."
          iconeUrl="/img/plataformas/otimizze-logo.png"
          imagemUrl="/img/plataformas/otimizze-telas.png"
          href="/plataforma/otimizze"
        />
        <Plataforma
          nome="Perfforme"
          descricao="Avalia os seus colaboradores, dá feedbacks para os mesmos e constrói o plano de desenvolvimento individual."
          iconeUrl="/img/plataformas/perfforme-logo.png"
          imagemUrl="/img/plataformas/perfforme-telas.png"
          href="/plataforma/perfforme"
          reverse
        />
        <Plataforma
          nome="Capacitte"
          descricao="Cria a universidade corporativa da organização construindo um ambiente de aprendizado a partir de um conteúdo específico para o desenvolvimento dos colaboradores."
          iconeUrl="/img/plataformas/capacitte-logo.png"
          imagemUrl="/img/plataformas/capacitte-telas.png"
          href="/plataforma/capacitte"
        />
        <Plataforma
          nome="Levantt"
          descricao="Acompanha e mede o grau de satisfação em tempo real para desenvolver um plano de lealdade para os seus clientes."
          iconeUrl="/img/plataformas/levantt-logo.png"
          imagemUrl="/img/plataformas/levantt-telas.png"
          href="/plataforma/levantt"
          reverse
        />
      </VStack>
    </Box>
  );
}
