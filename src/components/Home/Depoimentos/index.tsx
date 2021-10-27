import Image from 'next/image';
import {
  Box,
  Flex,
  chakra,
  Heading,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Container } from '../../Layout';

// import 'swiper/css';
// import 'swiper/css/pagination';

import styles from './styles.module.scss';

SwiperCore.use([Pagination]);

interface DepoimentoProps {
  nome: string;
  imagem: string;
  cargo: string;
  nota: number;
  texto: string;
}

function Depoimento({ nome, imagem, cargo, nota, texto }: DepoimentoProps) {
  return (
    <chakra.div paddingLeft="70px">
      <Box
        width="100%"
        padding="1.25rem 1.25rem 1.25rem 90px"
        margin="0"
        bgColor="#e5e5e5"
        borderRadius="0.5rem"
        position="relative"
      >
        <chakra.figure
          width="140px"
          height="140px"
          borderRadius="70px"
          borderWidth="0.3rem"
          borderStyle="solid"
          borderColor="orange.500"
          overflow="hidden"
          position="absolute"
          top="50%"
          marginTop="-70px"
          left="-70px"
        >
          <Image src={imagem} width={140} height={140} />
        </chakra.figure>
        <Heading as="h3" fontSize="1.75rem" color="orange.500">
          {nome}
        </Heading>
        <Heading
          as="h4"
          fontSize="1.25rem"
          color="gray.700"
          margin="0 0 0.25rem 0"
        >
          {cargo}
        </Heading>
        <chakra.div color="orange.500">
          <Icon as={FaStar} />
          <Icon as={FaStar} />
          <Icon as={FaStar} />
          <Icon as={FaStar} />
          <Icon as={FaStarHalfAlt} />
        </chakra.div>
        <Text color="gray.700" margin="0.5rem 0 0 0">
          &quot;{texto}&quot;
        </Text>
      </Box>
    </chakra.div>
  );
}

export default function Depoimentos(): JSX.Element {
  return (
    <Box padding="80px 0" backgroundColor="background.light" color="gray.200">
      <Container
        backgroundImage="url(/img/home-depoimentos-aspas.png)"
        backgroundRepeat="no-repeat"
        backgroundSize="155px 120px"
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          width="100%"
          padding={{ base: '0 0rem', lg: '0 0 0 120px' }}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            width: '80px',
            background:
              'linear-gradient(90deg, rgba(52,73,94,0) 10%, rgba(52,73,94,1) 90%)',
            zIndex: '2',
          }}
        >
          <Flex
            direction={{ base: 'row', lg: 'column' }}
            justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            margin={{ base: '0 4rem 3rem 3rem', lg: '0' }}
          >
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: '1.75rem', md: '2.5rem' }}
                color="orange.500"
              >
                Depoimentos
              </Heading>
              <Heading as="h3" fontSize="xl" fontWeight="regular">
                Clientes e parceiros
              </Heading>
            </Box>
            <Box>
              <HStack
                width="100%"
                direction="row"
                spacing={{ base: '2rem', lg: '1rem' }}
                align="center"
                justify="flex-end"
                fontSize="2rem"
                color="orange.500"
              >
                <Box
                  className="customSwipeLeftbutton"
                  transition="all 0.2s ease"
                  _hover={{
                    cursor: 'pointer',
                    color: 'orange.700',
                  }}
                >
                  <Icon as={FaChevronLeft} />
                </Box>
                <Box
                  className="customSwipeRightbutton"
                  transition="all 0.2s ease"
                  _hover={{
                    cursor: 'pointer',
                    color: 'orange.700',
                  }}
                >
                  <Icon as={FaChevronRight} />
                </Box>
              </HStack>
            </Box>
          </Flex>
          <chakra.div padding={{ base: '0', xl: '0 1rem 0 0' }} />
          <chakra.div flex="1" overflow="hidden" position="relative">
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              loop
              navigation={{
                prevEl: '.customSwipeLeftbutton',
                nextEl: '.customSwipeRightbutton',
              }}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <Depoimento
                  nome="William Wallace"
                  cargo="Gerente de Qualidade"
                  nota={9}
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem={`https://i.pravatar.cc/160?u=${Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(2, 10)}`}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <Depoimento
                  nome="Tyler Durden"
                  cargo="Gerente de RH"
                  nota={10}
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem={`https://i.pravatar.cc/160?u=${Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(2, 10)}`}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <Depoimento
                  nome="Caio Júlio César"
                  cargo="Gestor de Processos"
                  nota={8}
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem={`https://i.pravatar.cc/160?u=${Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(2, 10)}`}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <Depoimento
                  nome="Will Leite"
                  cargo="Gerente de RH"
                  nota={8}
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem={`https://i.pravatar.cc/160?u=${Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(2, 10)}`}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <Depoimento
                  nome="Fábio Coala"
                  cargo="Diretor Executivo"
                  nota={10}
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem={`https://i.pravatar.cc/160?u=${Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, '')
                    .substr(2, 10)}`}
                />
              </SwiperSlide>
            </Swiper>
          </chakra.div>
        </Flex>
      </Container>
    </Box>
  );
}
