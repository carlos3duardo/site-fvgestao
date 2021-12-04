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
import { SubmitHandler, useForm } from 'react-hook-form';
import { Container } from '..';
import { api } from '../../../services/api';
import { Input, SubmitButton } from '../../FormElements';

interface ContatoProps {
  pagina: string;
}

interface FormProps {
  pagina: string;
  nome: string;
  empresa: string;
  email: string;
  municipio: string;
  estado: string;
  celular: string;
}

export default function Contato({ pagina }: ContatoProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit: SubmitHandler<FormProps> = async data => {
    const response = await api.post('/contato', data);

    console.log(response.status, response.data);
  };

  return (
    <Flex
      width="100%"
      backgroundImage="url(/img/contato-background.png)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      justifyContent="flex-end"
      overflow="hidden"
      position="relative"
      id="contato"
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
            padding={{ base: '0', lg: '0 0 0 2rem' }}
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
            <chakra.form marginTop="2rem" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                id="pagina"
                name="pagina"
                value={pagina}
                {...register('pagina')}
              />
              <Grid templateColumns="repeat(12, 1fr)" gap="1.125rem">
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="text"
                    name="nome"
                    label="Seu nome"
                    isRequired
                    {...register('nome')}
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="text"
                    name="empresa"
                    label="Nome da sua empresa"
                    isRequired
                    {...register('empresa')}
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="email"
                    name="email"
                    label="Seu e-mail"
                    isRequired
                    {...register('email')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 8' }}>
                  <Input
                    type="text"
                    name="municipio"
                    label="Sua cidade"
                    isRequired
                    {...register('municipio')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 4' }}>
                  <Input
                    type="text"
                    name="uf"
                    label="Estado"
                    isRequired
                    {...register('uf')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 7' }}>
                  <Input
                    type="text"
                    name="celular"
                    label="Seu celular"
                    isRequired
                    {...register('celular')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 5' }}>
                  <SubmitButton
                    label="Enviar"
                    isLoading={formState.isSubmitting}
                  />
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
