import { Box, Flex, Heading, Text, chakra, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function SejaFranqueado(): JSX.Element {
  return (
    <Flex direction="row" bgColor="background.dark" color="gray.200">
      <Flex flex="1" direction="row" justifyContent="flex-end" padding="80px 0">
        <chakra.div
          width={{ base: '100%', xl: '640px' }}
          padding={{ base: '1rem', xl: '0 2rem' }}
        >
          <Heading
            as="h2"
            color="orange.500"
            fontSize={{ base: '1.75rem', md: '2.5rem' }}
          >
            AGREGUE ESSA IDEIA INOVADORA
          </Heading>
          <Text fontSize="xl" margin="1.25rem 0">
            Agregar e unir é o que nos interessa. Assim, decidimos criar uma
            ampla rede de parceiros que se beneficiam com o diferencial da FV
            GESTÃO, que está na agilidade dos processos.
          </Text>
          <Link href="/" passHref>
            <Button
              as="a"
              background="gradient.primary"
              color="white"
              borderRadius="99px"
              size="lg"
              _hover={{ color: 'primary.800' }}
            >
              Seja um franqueado
            </Button>
          </Link>
        </chakra.div>
      </Flex>
      <Box
        flex="1"
        backgroundImage="url(/img/home-franquia.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '100%',
          width: '160px',
          borderWidth: '0 0 100vh 300px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderLeftColor: 'background.dark',
          zIndex: 1,
        }}
      />
    </Flex>
  );
}
