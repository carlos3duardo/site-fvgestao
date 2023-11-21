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
// eslint-disable-next-line import/no-unresolved
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
  texto: string;
}

function Depoimento({ nome, imagem, cargo, texto }: DepoimentoProps) {
  return (
    <chakra.div paddingLeft={{ base: '0', md: '70px' }}>
      <Box
        width="100%"
        padding={{
          base: '5rem 2rem 2rem 2rem',
          md: '1.25rem 1.25rem 1.25rem 90px',
        }}
        margin={{ base: '70px 0 0 0', md: '0' }}
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
          top={{ base: '0', md: '50%' }}
          marginTop={{ base: '-70px', md: '-70px' }}
          left={{ base: '50%', md: '-70px' }}
          marginLeft={{ base: '-70px', md: '0' }}
          backgroundColor="orange.500"
        >
          <Image src={imagem} width={144} height={144} alt="" />
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
            display: {
              base: 'none',
              md: 'block',
            },
          }}
        >
          <Flex
            direction={{ base: 'row', lg: 'column' }}
            justifyContent={{ base: 'space-between', lg: 'flex-start' }}
            margin={{ base: '0 1rem 2rem', lg: '0' }}
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
            <Box marginRight={{ base: '0', md: '80px', lg: '0' }}>
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
              <SwiperSlide className={styles.swiperDepoimento}>
                <Depoimento
                  nome="Felipe Aquino"
                  cargo="Gestor de Processos"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem="/img/depoimento-avatar-felipe-aquino.jpg"
                />
              </SwiperSlide>

              <SwiperSlide className={styles.swiperDepoimento}>
                <Depoimento
                  nome="Jessica Costa"
                  cargo="Gerente de RH"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem="/img/depoimento-avatar-jessica-costa.jpg"
                />
              </SwiperSlide>

              <SwiperSlide className={styles.swiperDepoimento}>
                <Depoimento
                  nome="Gustavo Guedes"
                  cargo="Gerente de Qualidade"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem="/img/depoimento-avatar-gustavo-guedes.jpg"
                />
              </SwiperSlide>

              <SwiperSlide className={styles.swiperDepoimento}>
                <Depoimento
                  nome="Monica Silva"
                  cargo="Gerente de RH"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem="/img/depoimento-avatar-monica-silva.jpg"
                />
              </SwiperSlide>

              <SwiperSlide className={styles.swiperDepoimento}>
                <Depoimento
                  nome="Will Leite"
                  cargo="Diretor Executivo"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem="/img/depoimento-avatar-will-leite.jpg"
                />
              </SwiperSlide>

              <SwiperSlide className={styles.swiperDepoimento}>
                <Depoimento
                  nome="Patricia Prata"
                  cargo="Diretor Executivo"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet nisl."
                  imagem="/img/depoimento-avatar-patricia-prata.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </chakra.div>
        </Flex>
      </Container>
    </Box>
  );
}
