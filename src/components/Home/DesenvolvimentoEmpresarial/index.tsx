import Link from 'next/link';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

import { Container } from '../../Layout';

export default function DesenvolvimentoEmpresarial(): JSX.Element {
  return (
    <Box
      padding={{ base: '0', md: '4rem 0' }}
      backgroundImage="url(/img/home-desenvolvimento-empresarial-background.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      <Container padding={{ base: '0', md: '0 2rem', xl: '0' }}>
        <Box
          padding="3rem"
          width={{ base: '100%', lg: '540px' }}
          color="gray.200"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'background.light',
            borderRadius: { base: '0', md: '0.75rem' },
            width: '100%',
            height: '100%',
            opacity: '0.9',
            zIndex: '0',
          }}
        >
          <Heading
            as="h2"
            fontSize={{ base: '1.75rem', md: '2.5rem' }}
            color="orange.500"
            marginBottom="1rem"
            position="relative"
            zIndex="1"
          >
            Programa de Desenvolvimento Empresarial
          </Heading>
          <Text
            fontSize="1.25rem"
            marginBottom="1rem"
            position="relative"
            zIndex="1"
          >
            Da premissa de proporcionar um ambiente favorável para que as
            empresas atuem em uma jornada rumo à excelência, o método de medir,
            acompanhar e capacitar possui a sua eficácia testada e aprovada, uma
            vez que, independentemente do estágio em que a empresa se encontra,
            o processo de melhoria será contínuo.
          </Text>

          <Link href="/cases" passHref>
            <Button
              as="a"
              colorScheme="orange"
              variant="outline"
              borderWidth="2px"
              borderRadius="99px"
              _hover={{
                background: 'orange.50',
              }}
              _active={{
                background: 'orange.500',
                borderColor: 'orange.500',
                textColor: '#ffffff',
              }}
            >
              mais detalhes
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
