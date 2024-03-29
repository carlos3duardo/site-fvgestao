import { Box, Flex, Heading, chakra } from '@chakra-ui/react';
import { Container } from '../../Layout';

export default function WelcomeBanner(): JSX.Element {
  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundColor="background.light"
      backgroundImage="/img/home-welcome.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      position="relative"
    >
      <chakra.div
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="48%"
        backgroundColor="background.dark"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '100%',
          width: '0px',
          height: '100vh',
          borderWidth: '100vh 250px 0 0',
          borderColor: 'transparent',
          borderTopColor: `background.dark`,
        }}
      />
      <Flex
        direction="row"
        alignItems="center"
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        left="0"
        overflow="hidden"
      >
        <Container position="relative" height="520px">
          <chakra.img
            src="/img/fvgestao-logo-icone.svg"
            width={{ base: '520px', xl: '420px', '2xl': '520px' }}
            height={{ base: '520px', xl: '420px', '2xl': '520px' }}
            position="absolute"
            top="50%"
            right={{
              base: '-220px',
              md: '-160px',
              lg: '-160px',
              xl: '0',
              '2xl': '-160px',
            }}
            marginTop={{ base: '-260px', xl: '-210px', '2xl': '-260px' }}
            opacity="0.3"
            zIndex="0"
          />
        </Container>
      </Flex>

      <Box
        position="absolute"
        width="100%"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Container marginTop={{ base: '8rem', md: '0' }}>
          <Heading
            as="h1"
            fontSize={{
              base: '3.25rem',
              md: '5rem',
              lg: '7rem',
              xl: '8rem',
            }}
            zIndex="4"
          >
            <chakra.span display="block" lineHeight="1" color="orange.500">
              Cultura
            </chakra.span>
            <chakra.span
              display="block"
              lineHeight="1"
              fontSize={{
                base: '4.5rem',
                md: '8rem',
                lg: '10rem',
                xl: '11rem',
              }}
              color="white"
              textShadow="0 4px 4px rgba(0, 0, 0, .25)"
            >
              Vencedora
            </chakra.span>
          </Heading>
          <Heading
            as="h3"
            fontSize="1.75rem"
            lineHeight="1.2"
            fontWeight="light"
            marginLeft={{ base: '0', md: '0.5rem', lg: '1rem' }}
            color="gray.200"
          >
            Que inspira empresários e gestores de todo Brasil.
          </Heading>
        </Container>
      </Box>
    </Flex>
  );
}
