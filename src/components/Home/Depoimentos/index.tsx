import { Box, Heading } from '@chakra-ui/react';
import { Container } from '../../Layout';

export default function Depoimentos(): JSX.Element {
  return (
    <Box padding="60px 0" backgroundColor="background.light" color="gray.200">
      <Container>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
        >
          Depoimentos
        </Heading>
      </Container>
    </Box>
  );
}
