import { chakra } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function BussolaTerceirizacao(): JSX.Element {
  return (
    <Container
      className="container"
      position="relative"
      display="flex"
      alignItems="center"
      padding="0"
      maxWidth="100%"
    >
      <chakra.a
        href="https://www.sympla.com.br/evento/bussola-da-terceirizacao/2211591"
        target="_blank"
        display="block"
        width="100%"
      >
        <chakra.img
          src="/img/home-destaques/bussola-terceirizacao.jpg"
          width={{ base: '100%' }}
        />
      </chakra.a>
    </Container>
  );
}
