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
        <VStack spacing="4rem">
          <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
            <chakra.figure w="300px">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text fontSize="1.5rem" flex="1">
              Aqui você identifica o grau de profissionalismo gerencial do seu
              negócio através de planos operacionais, criando musculatura para
              solidificar o seu negócio.
            </Text>
          </Flex>
          <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            alignItems="center"
          >
            <chakra.figure w="300px">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text fontSize="1.5rem" flex="1" textAlign="right">
              Capacite os seus colaboradores para o desempenho total de suas
              capacidades técnicas vocacionais, competências e saberes.
            </Text>
          </Flex>
          <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
            <chakra.figure w="300px">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text fontSize="1.5rem" flex="1">
              Um centro de excelência impulsionando a cultura de um aprendizado
              dirigido ao desenvolvimento e crescimento sustentável da empresa.
            </Text>
          </Flex>
          <Flex
            direction={{ base: 'column', md: 'row-reverse' }}
            alignItems="center"
          >
            <chakra.figure w="300px">
              <Image
                src="/img/app-otimizze.png"
                alt="Otimizze"
                width={229}
                height={160}
              />
            </chakra.figure>
            <Text fontSize="1.5rem" flex="1" textAlign="right">
              Acompanhamento o grau de satisfação e fidelidade dos clientes,
              objetivando o sucesso na relação de serviços e produtos ofertados.
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
