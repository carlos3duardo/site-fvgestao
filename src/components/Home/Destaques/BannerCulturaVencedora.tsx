import { Box, Heading, chakra } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function BannerCulturaVencedora(): JSX.Element {
  return (
    <Container
      className="container"
      height="520px"
      position="relative"
      display="flex"
      alignItems="center"
    >
      <Box
        position="relative"
        zIndex="2"
        paddingRight={{ base: '2rem', md: '2rem', lg: '0' }}
      >
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
          Que inspira empresários e gestores.
        </Heading>
      </Box>

      <chakra.img
        src="/img/fvgestao-logo-icone.svg"
        width={{ base: '560px', xl: '420px', '2xl': '520px' }}
        height={{ base: '560px', xl: '420px', '2xl': '520px' }}
        position="absolute"
        top="50%"
        right={{
          base: '-160px',
          md: '-160px',
          lg: '-160px',
          xl: '-160px',
          '2xl': '-160px',
        }}
        marginTop={{ base: '-280px', xl: '-240px', '2xl': '-210px' }}
        opacity="0.3"
        zIndex="1"
      />

      <chakra.img
        src="/img/home-banner-bg-cultura-vencedora.png"
        width={{ base: '360px', xl: '310px', '2xl': '410px' }}
        height={{ base: '650px', xl: '560px', '2xl': '740px' }}
        position="absolute"
        top="50%"
        right={{
          base: '-80px',
          md: '0px',
          lg: '60px',
          xl: '60px',
          '2xl': '120px',
        }}
        marginTop={{ base: '-325px', xl: '-280px', '2xl': '-370px' }}
        zIndex="0"
      />
    </Container>
  );
}
