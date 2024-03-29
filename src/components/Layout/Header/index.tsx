import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  chakra,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HiChevronDown } from 'react-icons/hi';

import { FaHandshake } from 'react-icons/fa';
import { Container } from '..';

interface NavItemProps {
  label: string;
  children?: NavItemProps[];
  href?: string;
  bordered?: boolean;
  target?: string;
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
    label: 'Cases',
    href: '/cases',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
  {
    label: 'Login',
    href: '#login',
    bordered: true,
    children: [
      {
        label: 'Otimizze',
        href: 'https://otimizze.fvgestao.com.br',
        target: '_blank',
      },
      {
        label: 'Perfforme',
        href: 'https://perfforme.fvgestao.com.br',
        target: '_blank',
      },
      {
        label: 'Capacitte',
        href: 'https://capacitte.fvgestao.com.br',
        target: '_blank',
      },
      {
        label: 'Levantt',
        href: 'https://www.levantt.com.br',
        target: '_blank',
      },
    ],
  },
];

function DesktopNav(): JSX.Element {
  return (
    <HStack as="ul" listStyleType="none" spacing="0">
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
                  borderRadius="99px"
                  borderColor={navItem.bordered ? 'orange.500' : 'transparent'}
                  padding="1.2rem 1rem 1rem 1rem"
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
                width="200px"
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
                borderColor={navItem.bordered ? 'orange.500' : 'transparent'}
                padding="1.2rem 1rem 1rem 1rem"
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

interface MobibeNavToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function MobileNavToggleButton({
  isOpen,
  onClick,
}: MobibeNavToggleButtonProps): JSX.Element {
  return (
    <Flex display={{ base: 'flex', lg: 'none' }}>
      <IconButton
        onClick={onClick}
        icon={
          isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={7} h={7} />
        }
        variant="orange"
        aria-label="Toggle Navigation"
        _hover={{
          backgroundColor: 'transparent',
        }}
      />
    </Flex>
  );
}

type MobileNavItemProps = {
  label: string;
  subNav?: NavItemProps[];
  href: string;
};

function MobileNavItem({
  label,
  subNav,
  href,
}: MobileNavItemProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <chakra.li margin="0" padding="0" width="100%">
      {subNav ? (
        <Flex
          width="100%"
          padding="0 1rem"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          _hover={{ color: 'orange.500' }}
          onClick={subNav && onToggle}
        >
          <Box
            flex="1"
            textAlign="right"
            fontSize="1.25rem"
            fontWeight="semibold"
            _hover={{ cursor: 'pointer' }}
          >
            {label}
          </Box>
          <Box>
            <Icon
              as={HiChevronDown}
              w={8}
              h={8}
              transition="all 0.2s ease"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          </Box>
        </Flex>
      ) : (
        <Link href={href} passHref>
          <chakra.a
            padding="0 1rem"
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            _hover={{ color: 'orange.500' }}
          >
            <Box
              flex="1"
              textAlign="right"
              fontSize="1.25rem"
              fontWeight="semibold"
            >
              {label}
            </Box>
            <Box>
              <Icon as={HiChevronDown} w={8} h={8} opacity="0" />
            </Box>
          </chakra.a>
        </Link>
      )}
      {subNav && (
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            padding="0.5rem 3rem 0.5rem 2rem"
            margin="0.25rem 0 0 0"
            align="end"
            fontSize="1.25rem"
            fontWeight="semibold"
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              top: '0',
              right: '1.8rem',
              backgroundColor: 'gray.500',
              width: '6px',
              height: '100%',
              borderRadius: '3px',
            }}
          >
            {subNav.map(child => (
              <Link key={child.label} href={child.href} passHref>
                <chakra.a
                  display="block"
                  width="100%"
                  color="gray.200"
                  _hover={{ color: 'orange.500' }}
                  position="relative"
                  textAlign="right"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    backgroundColor: 'background.light',
                    height: '12px',
                    width: '12px',
                    right: '-22px',
                    marginTop: '-6px',
                    borderRadius: '6px',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: 'gray.500',
                    zIndex: 1,
                  }}
                >
                  {child.label}
                </chakra.a>
              </Link>
            ))}
          </Stack>
        </Collapse>
      )}
    </chakra.li>
  );
}

function MobileNav(): JSX.Element {
  return (
    <chakra.div
      display={{ lg: 'none' }}
      borderTop="1px solid rgba(255, 255, 255, 0.2)"
    >
      <Stack as="ul" listStyleType="none" padding="1rem 0">
        {navItems.map(navItem => (
          <MobileNavItem
            key={navItem.label}
            label={navItem.label}
            href={navItem.href}
            subNav={navItem.children}
          />
        ))}
        <Link href="/seja-franqueado" passHref>
          <chakra.a
            padding="0 1rem"
            display="flex"
            width="100%"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            color="orange.500"
            _hover={{ color: 'orange.700' }}
          >
            <Box
              flex="1"
              textAlign="right"
              fontSize="1.25rem"
              fontWeight="semibold"
            >
              <Icon as={FaHandshake} w={8} h={8} />
              &nbsp;&nbsp; Seja um franqueado
            </Box>
            <Box>
              <Icon as={FaHandshake} w={8} h={8} opacity="0" />
            </Box>
          </chakra.a>
        </Link>
      </Stack>
    </chakra.div>
  );
}

export default function Header(): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <chakra.header
      position="fixed"
      top="0"
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
              alt="FV Gestão"
            />
          </chakra.a>
        </Link>

        <Box display={{ base: 'none', lg: 'block' }}>
          <DesktopNav />
        </Box>

        {/*
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
        */}

        <MobileNavToggleButton isOpen={isOpen} onClick={onToggle} />
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </chakra.header>
  );
}
