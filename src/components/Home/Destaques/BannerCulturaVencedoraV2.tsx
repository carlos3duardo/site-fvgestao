import { chakra } from '@chakra-ui/react';

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
      <chakra.img
        src="/img/home-destaques/cultura-vencedora.jpg"
        width={{ base: '100%' }}
      />
    </Container>
  );
}
