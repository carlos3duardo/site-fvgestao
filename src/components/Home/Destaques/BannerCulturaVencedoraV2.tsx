import { Box, Heading, chakra } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function BannerCulturaVencedoraV2(): JSX.Element {
  return (
    <Container
      className="container"
      position="relative"
      display="flex"
      alignItems="center"
      padding="0"
      maxWidth="100%"
    >
      <chakra.img src="/img/home-welcome.jpg" width={{ base: '100%' }} />
      {/* <chakra.img
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
      /> */}
    </Container>
  );
}
