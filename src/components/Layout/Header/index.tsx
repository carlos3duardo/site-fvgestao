import Image from 'next/image';
import Link from 'next/link';
import { Box, HStack, Button, chakra } from '@chakra-ui/react';
import { Container } from '..';

export default function Header(): JSX.Element {
  return (
    <chakra.header
      position="fixed"
      zIndex="1"
      width="100%"
      bgColor="background.light"
      color="gray.100"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Container
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        padding={{ base: '20px 1rem', xl: '20px 0' }}
      >
        <Image src="/img/fvgestao-logo-header.svg" width={158} height={48} />

        <Box display={{ base: 'none', lg: 'block' }}>
          <HStack>
            <Link href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                borderWidth="2px"
                borderRadius="99px"
                borderColor="transparent"
                _hover={{ borderColor: 'orange.500' }}
              >
                Quem somos
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                borderWidth="2px"
                borderRadius="99px"
                borderColor="transparent"
                _hover={{ borderColor: 'orange.500' }}
              >
                Produtos
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                borderWidth="2px"
                borderRadius="99px"
                borderColor="transparent"
                _hover={{ borderColor: 'orange.500' }}
              >
                Clientes
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                borderWidth="2px"
                borderRadius="99px"
                borderColor="transparent"
                _hover={{ borderColor: 'orange.500' }}
              >
                Depoimentos
              </Button>
            </Link>
          </HStack>
        </Box>

        <Box display={{ base: 'none', lg: 'block' }}>
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              borderWidth="2px"
              borderRadius="99px"
              borderColor="orange.500"
              _hover={{ color: 'orange.500' }}
            >
              Seja um franqueado
            </Button>
          </Link>
        </Box>
      </Container>
    </chakra.header>
  );
}
