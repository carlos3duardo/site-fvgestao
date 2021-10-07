import Link from 'next/link';
import {
  Box,
  Flex,
  chakra,
  Icon,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { MdPlayCircleOutline } from 'react-icons/md';

import { Container } from '../../Layout';

export default function QuemSomos(): JSX.Element {
  return (
    <Box padding="4rem 1rem">
      <Container>
        <Flex
          width="100%"
          align="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <chakra.figure
            width={{ base: '100%', lg: '520px', xl: '640px' }}
            height={{ base: '357px', md: '420px' }}
            margin={{ base: '0 0 2rem 0', lg: '0 2rem 0 0' }}
            padding="1rem"
            backgroundImage="img/home-quem-somos-video-background.jpg"
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
              <Icon as={MdPlayCircleOutline} w="4rem" h="4rem" color="white" />
            </Flex>
          </chakra.figure>
          <chakra.div flex="1" textColor="primary.800">
            <Heading as="h2" mb="1rem">
              Quem somos
            </Heading>
            <Text fontSize="1.5rem" mb="1rem">
              A FVGestão é uma plataforma de soluções empresariais a partir da
              inovação das práticas coorporativas tendo como base a educação, a
              tecnologia e a cultura gerencial voltadas para o êxito nos
              resultados do seu negócio.
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
          </chakra.div>
        </Flex>
      </Container>
    </Box>
  );
}
