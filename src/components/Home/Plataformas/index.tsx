import Image from 'next/image';
import { Box, Flex, Heading, Text, VStack, chakra } from '@chakra-ui/react';

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

export default function Plataformas(): JSX.Element {
  return (
    <Box padding="4rem 0" color="primary.500">
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
        <VStack>
          <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
            <chakra.figure w="300px" textAlign="center">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text
              fontSize="1.5rem"
              flex="1"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Aqui você identifica o grau de profissionalismo gerencial do seu
              negócio através de planos operacionais, criando musculatura para
              solidificar o seu negócio.
            </Text>
          </Flex>

          <Dots />

          <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            alignItems="center"
          >
            <chakra.figure w="300px" textAlign="center">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text
              fontSize="1.5rem"
              flex="1"
              textAlign={{ base: 'center', md: 'right' }}
            >
              Capacite os seus colaboradores para o desempenho total de suas
              capacidades técnicas vocacionais, competências e saberes.
            </Text>
          </Flex>

          <Dots reverse />

          <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
            <chakra.figure w="300px" textAlign="center" position="relative">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text
              fontSize="1.5rem"
              flex="1"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Um centro de excelência impulsionando a cultura de um aprendizado
              dirigido ao desenvolvimento e crescimento sustentável da empresa.
            </Text>
          </Flex>

          <Dots />

          <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            alignItems="center"
          >
            <chakra.figure w="300px" textAlign="center" position="relative">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text
              fontSize="1.5rem"
              flex="1"
              textAlign={{ base: 'center', md: 'right' }}
            >
              Acompanhamento o grau de satisfação e fidelidade dos clientes,
              objetivando o sucesso na relação de serviços e produtos ofertados.
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
