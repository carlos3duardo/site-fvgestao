import Link from 'next/link';
import { Box, Flex, chakra, Heading, Text, Button } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function QuemSomos(): JSX.Element {
  return (
    <Box padding="4rem 1rem" backgroundColor="gray.100">
      <Container>
        <Flex
          width="100%"
          align="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <chakra.figure
            width={{ base: '100%', lg: '520px', xl: '640px' }}
            height={{ base: '260px', md: '420px' }}
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
            />
          </chakra.figure>
          <chakra.div flex="1" textColor="primary.800">
            <Heading as="h2" mb="1rem">
              Quem somos
            </Heading>
            <Text fontSize="1.5rem" mb="1rem">
              A FV Gestão é uma plataforma de soluções empresariais que possui
              um método exclusivo para inovação das práticas corporativas tendo
              como base a educação, a tecnologia e a cultura gerencial voltadas
              para o êxito nos resultados do seu negócio.
            </Text>
            <Text fontSize="1.5rem" mb="1rem">
              E como a gente consegue fazer isso?
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
        </Flex>
      </Container>
    </Box>
  );
}
