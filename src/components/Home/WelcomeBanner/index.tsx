import { Box, Flex, Heading, chakra } from '@chakra-ui/react';
import { Container } from '../../Layout';

export default function WelcomeBanner(): JSX.Element {
  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundColor="background.light"
      backgroundImage="/img/home-banner-background.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      position="relative"
    >
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
            width={{ base: '520px' }}
            height={{ base: '520px' }}
            position="absolute"
            top="50%"
            right={{ base: '-220px', md: '-160px', lg: '-160px' }}
            marginTop={{ base: '-260px' }}
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
              md: '5.5rem',
              lg: '7.5rem',
              xl: '8.5rem',
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
                lg: '11rem',
                xl: '13rem',
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
