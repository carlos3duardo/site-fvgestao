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
      backgroundPosition="center center"
      backgroundSize="cover"
      justifyContent="flex-end"
      overflow="hidden"
    >
      <Container>
        <Flex
          direction="row"
          justifyContent="flex-end"
          padding="120px 0"
          position="relative"
        >
          <chakra.div
            position="absolute"
            top="0"
            left="40%"
            width="100%"
            height="100%"
            background="linear-gradient(90deg, rgba(254, 140, 0, 0.8) 27.58%, rgba(248, 104, 0, 0.8) 92.9%)"
            transform="matrix(0.97, 0, -0.27, 1, 0, 0)"
            zIndex="0"
          />
          <Box width="50%" position="relative" zIndex="1">
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
