import { Flex, Heading, chakra } from '@chakra-ui/react';
import { Container } from '../../Layout';

export default function WelcomeBanner(): JSX.Element {
  return (
    <Flex
      direction="column"
      justify="center"
      width="100%"
      height="100vh"
      backgroundColor="background.light"
      backgroundImage="/img/home-banner-background.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      <Container>
        <Heading as="h1" fontSize={{ base: '3.25rem', md: '6.25rem' }}>
          <chakra.span display="block" lineHeight="1" color="orange.500">
            Cultura
          </chakra.span>
          <chakra.span
            display="block"
            lineHeight="1"
            fontSize={{ base: '4.5rem', md: '12.5rem' }}
            color="white"
            textShadow="0 4px 4px rgba(0, 0, 0, .25)"
          >
            Vencedora
          </chakra.span>
        </Heading>
        <Heading
          as="h3"
          fontSize="1.5rem"
          lineHeight="1.2"
          fontWeight="300"
          margin="0 0 0 2rem"
          color="gray.200"
        >
          Que inspira empresários e gestores
          <br />
          de todo Brasil.
        </Heading>
      </Container>
    </Flex>
  );
}
