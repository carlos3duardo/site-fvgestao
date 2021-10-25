import { Heading, chakra } from '@chakra-ui/react';
import { Container } from '..';

export default function Footer(): JSX.Element {
  return (
    <chakra.footer
      width="100%"
      bgColor="background.dark"
      color="gray.100"
      padding="2rem 0"
    >
      <Container>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
        >
          Rodapé
        </Heading>
      </Container>
    </chakra.footer>
  );
}
