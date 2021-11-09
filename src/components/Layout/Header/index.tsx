import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  HStack,
  Button,
  Icon,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import { Container } from '..';

interface NavItemProps {
  label: string;
  children?: NavItemProps[];
  href?: string;
  borderded?: boolean;
}

const navItems: Array<NavItemProps> = [
  {
    label: 'Quem somos',
    href: '/quem-somos',
  },
  {
    label: 'Produtos',
    href: '#',
    children: [
      {
        label: 'Programa de Desenvolvimento Empresarial',
        href: '/desenvolvimento-empresarial',
      },
      {
        label: 'Otimizze',
        href: '/plataforma/otimizze',
      },
      {
        label: 'Perfforme',
        href: '/plataforma/perfforme',
      },
      {
        label: 'Capacitte',
        href: '/plataforma/capacitte',
      },
      {
        label: 'Levantt',
        href: '/plataforma/levantt',
      },
    ],
  },
  {
    label: 'Clientes',
    href: '/#clientes',
  },
  {
    label: 'Depoimentos',
    href: '/#depoimentos',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
];

function DesktopNav(): JSX.Element {
  return (
    <HStack as="ul" listStyleType="none">
      {navItems.map(navItem => (
        <chakra.li
          key={navItem.label}
          transition="background-color 0.2s ease"
          _hover={{
            color: 'orange.500',
          }}
        >
          {navItem.children ? (
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Button
                  as="a"
                  variant="ghost"
                  borderWidth="2px"
                  borderColor="transparent"
                  borderRadius="99px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  {navItem.label} <Icon as={HiChevronDown} />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                bgColor="background.dark"
                border="0"
                marginTop="-4px"
                borderRadius="0.5rem"
                boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <PopoverBody>
                  {navItem.children.map((children, index) => (
                    <chakra.div
                      key={children.label}
                      fontWeight="bold"
                      padding="0.5rem .3rem"
                      borderBottom={
                        navItem.children.length === index + 1
                          ? '0'
                          : '1px solid rgba(255, 255, 255, 0.2)'
                      }
                    >
                      <Link href={children.href} passHref>
                        <chakra.a
                          display="block"
                          color="white"
                          _hover={{ color: 'orange.500' }}
                        >
                          {children.label}
                        </chakra.a>
                      </Link>
                    </chakra.div>
                  ))}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href={navItem.href} passHref>
              <Button
                as="a"
                variant="ghost"
                borderWidth="2px"
                borderRadius="99px"
                borderColor={navItem.borderded ? 'orange.500' : 'transparent'}
                _hover={{
                  backgroundColor: 'transparent',
                }}
              >
                {navItem.label}
              </Button>
            </Link>
          )}
        </chakra.li>
      ))}
    </HStack>
  );
}

function MobileNav(): JSX.Element {
  return <div>123</div>;
}

export default function Header(): JSX.Element {
  return (
    <chakra.header
      position="fixed"
      zIndex="99"
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
        <Link href="/" passHref>
          <chakra.a>
            <Image
              src="/img/fvgestao-logo-header.svg"
              width={158}
              height={48}
            />
          </chakra.a>
        </Link>

        <Box display={{ base: 'none', lg: 'block' }}>
          <DesktopNav />
        </Box>

        <Box display={{ base: 'none', lg: 'block' }}>
          <Link href="/seja-franqueado" passHref>
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

        <Box display={{ base: 'block', lg: 'none' }}>
          <MobileNav />
        </Box>
      </Container>
    </chakra.header>
  );
}
