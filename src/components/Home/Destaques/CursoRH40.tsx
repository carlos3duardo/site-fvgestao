import { chakra } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function CursoRH40(): JSX.Element {
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
        href="http://dsconsultoresassociados.com.br/produto/rh-estrategico/"
        target="_blank"
        display="block"
        width="100%"
      >
        <chakra.img
          src="/img/home-destaques/curso-rh-4.0-1440x570.jpg"
          width={{ base: '100%' }}
        />
      </chakra.a>
    </Container>
  );
}
