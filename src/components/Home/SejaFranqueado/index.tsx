import { Box, Heading } from '@chakra-ui/react';
import { Container } from '../../Layout';

export default function SejaFranqueado(): JSX.Element {
  return (
    <Box padding="60px 0">
      <Container>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
        >
          Seja franqueado
        </Heading>
      </Container>
    </Box>
  );
}
