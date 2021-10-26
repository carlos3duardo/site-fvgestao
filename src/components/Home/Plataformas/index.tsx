import Image from 'next/image';
import { Box, Flex, Heading, Text, VStack, chakra } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function Plataformas(): JSX.Element {
  return (
    <Box padding="4rem 0" color="primary.500">
      <Container maxWidth="container.lg">
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
          <Image src="/img/app-dots.svg" alt="" width={724} height={156} />
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
          <Image
            src="/img/app-dots-reverse.svg"
            alt=""
            width={724}
            height={156}
          />
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
          <Image src="/img/app-dots.svg" alt="" width={724} height={156} />
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
