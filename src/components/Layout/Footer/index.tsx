import Image from 'next/image';
import Link from 'next/link';
import { chakra, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { Container } from '..';

export default function Footer(): JSX.Element {
  return (
    <chakra.footer
      width="100%"
      bgColor="background.dark"
      color="gray.100"
      padding="2rem 0 0 0"
    >
      <Container>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <chakra.div>
            <HStack
              spacing="1rem"
              justifyContent={{ base: 'space-around', md: 'flex-start' }}
              margin={{ base: '0 0 3rem 0', md: '0' }}
            >
              <chakra.a
                href="https://www.facebook.com/fvgestao"
                target="_blank"
                color="orange.500"
                transition="all 0.2s ease"
                _hover={{ color: 'gray.200' }}
              >
                <Icon as={FaFacebookSquare} w={8} h={8} />
              </chakra.a>
              <chakra.a
                href="https://instagram.com/fvgestao"
                target="_blank"
                color="orange.500"
                transition="all 0.2s ease"
                _hover={{ color: 'gray.200' }}
              >
                <Icon as={FaInstagram} w={8} h={8} />
              </chakra.a>
              <chakra.a
                href="https://www.linkedin.com/company/fv-gest%C3%A3o/"
                target="_blank"
                color="orange.500"
                transition="all 0.2s ease"
                _hover={{ color: 'gray.200' }}
              >
                <Icon as={FaLinkedin} w={8} h={8} />
              </chakra.a>
              <chakra.a
                href="https://www.youtube.com/channel/UCwnrzvTjqWbaiUWl8KIw37g"
                target="_blank"
                color="orange.500"
                transition="all 0.2s ease"
                _hover={{ color: 'gray.200' }}
              >
                <Icon as={FaYoutube} w={8} h={8} />
              </chakra.a>
            </HStack>
            <Flex mt="1rem">
              <chakra.figure>
                <Icon as={FaMapMarkerAlt} w={8} h={8} color="orange.500" />
              </chakra.figure>
              <Text ml="1rem" fontSize="1.25rem" fontWeight="bold">
                Av. Senador Ruy Carneiro 895
                <br />
                Miramar - João Pessoa - PB
              </Text>
            </Flex>
          </chakra.div>
          <chakra.div margin={{ base: '2rem 0 0 0', md: '0' }}>
            <Flex mt="1rem" alignItems="center">
              <chakra.figure>
                <Icon as={FaPhoneAlt} w={8} h={8} color="orange.500" />
              </chakra.figure>
              <Text ml="1rem" fontSize="1.25rem" fontWeight="bold">
                (83) 2107-8949
              </Text>
            </Flex>
            <Flex mt="1rem" alignItems="center">
              <chakra.figure>
                <Icon as={FaEnvelope} w={8} h={8} color="orange.500" />
              </chakra.figure>
              <Text ml="1rem" fontSize="1.25rem" fontWeight="bold">
                contato@fvgestao.com.br
              </Text>
            </Flex>
          </chakra.div>
        </Flex>
      </Container>
      <chakra.div
        background="background.light"
        padding="1.25rem"
        marginTop="2rem"
      >
        <Container>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <chakra.div marginBottom={{ base: '1rem', md: '0' }}>
              <Text>
                {new Date().getFullYear()} &copy; FV Gestão. Todos os direitos
                reservados.
              </Text>
              <Link href="/termos-de-uso" passHref>
                <chakra.a color="orange.200" _hover={{ color: 'orange.600' }}>
                  Termos de uso
                </chakra.a>
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link href="/aviso-de-privacidade" passHref>
                <chakra.a color="orange.200" _hover={{ color: 'orange.600' }}>
                  Aviso de privacidade
                </chakra.a>
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link href="/politica-de-cookies" passHref>
                <chakra.a color="orange.200" _hover={{ color: 'orange.600' }}>
                  Política de cookies
                </chakra.a>
              </Link>
            </chakra.div>
            <chakra.figure>
              <Image
                src="/img/fvgestao-logo-footer.svg"
                width={105}
                height={32}
                alt="FV Gestão"
              />
            </chakra.figure>
          </Flex>
        </Container>
      </chakra.div>
    </chakra.footer>
  );
}
