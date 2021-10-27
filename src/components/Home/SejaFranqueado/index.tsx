import { Box, Flex, Heading, Text, chakra, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function SejaFranqueado(): JSX.Element {
  return (
    <Flex
      direction="row"
      position="relative"
      overflow="hidden"
      color="gray.200"
      backgroundImage="url(/img/home-franquia.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: `background.dark`,
        opacity: { base: '0.7', lg: '0' },
        zIndex: '0',
      }}
    >
      <chakra.div
        position="absolute"
        bottom="0"
        right={{ base: '80%', md: '70%', lg: '50%' }}
        width="100%"
        height="100%"
        background="background.dark"
        zIndex="0"
        opacity={{ base: '0.8', lg: '1' }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '100%',
          width: '400px',
          height: '100vh',
          borderWidth: '100vh 400px 0 0',
          borderColor: 'transparent',
          borderTopColor: `background.dark`,
        }}
      />
      <Flex
        flex="1"
        justifyContent="flex-end"
        padding={{ base: '120px 2rem', lg: '120px 0' }}
        position="relative"
        zIndex="2"
      >
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
        display={{ base: 'none', lg: 'block' }}
        flex="1"
        backgroundImage="url(/img/home-franquia.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
      />
    </Flex>
  );
}
