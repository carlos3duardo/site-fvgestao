import {
  Box,
  Flex,
  Heading,
  Text,
  chakra,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Container } from '..';
import { Input, SubmitButton } from '../../FormElements';

export default function Contato(): JSX.Element {
  return (
    <Flex
      width="100%"
      backgroundImage="url(/img/contato-background.png)"
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        base: 'left center',
        lg: 'center center',
      }}
      backgroundSize={{ base: 'auto', lg: 'cover' }}
      justifyContent="flex-end"
      overflow="hidden"
      position="relative"
    >
      <chakra.div
        position="absolute"
        top="0"
        left={{ base: '0', lg: '50%' }}
        width="100%"
        height="100%"
        backgroundColor="orange.600"
        opacity="0.8"
        zIndex="0"
        _after={{
          content: '""',
          position: 'absolute',
          top: '0',
          right: '100%',
          width: '400px',
          height: '100vh',
          borderWidth: '0 0 100vh 400px',
          borderColor: 'transparent',
          borderBottomColor: `orange.600`,
          display: { base: 'none', lg: 'block' },
        }}
      />
      <Container>
        <Flex
          direction="row"
          justifyContent="flex-end"
          padding="120px 0"
          position="relative"
        >
          <Box
            width={{ base: '100%', lg: '50%' }}
            position="relative"
            zIndex="1"
            padding="0 0 0 2rem"
          >
            <Heading
              as="h2"
              color="background.dark"
              fontSize={{ base: '1.75rem', md: '2.5rem' }}
            >
              Entre em contato conosco
            </Heading>
            <Text
              fontSize={{ base: '1.25rem', md: '1.25rem' }}
              color="white"
              fontWeight="semibold"
            >
              Preencha o formulário e entraremos em contato com você
            </Text>
            <chakra.form marginTop="2rem">
              <Grid templateColumns="repeat(12, 1fr)" gap="1.125rem">
                <GridItem gridColumnEnd="span 12">
                  <Input type="text" name="nome" label="Seu nome" isRequired />
                </GridItem>
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="text"
                    name="empresa"
                    label="Nome da sua empresa"
                    isRequired
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="email"
                    name="email"
                    label="Seu e-mail"
                    isRequired
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 8">
                  <Input
                    type="text"
                    name="municipio"
                    label="Sua cidade"
                    isRequired
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 4">
                  <Input type="text" name="uf" label="Estado" isRequired />
                </GridItem>
                <GridItem gridColumnEnd="span 7">
                  <Input
                    type="text"
                    name="celular"
                    label="Seu celular"
                    isRequired
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 5">
                  <SubmitButton label="Enviar" />
                </GridItem>
              </Grid>
              <VStack spacing="1.25rem" />
            </chakra.form>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
