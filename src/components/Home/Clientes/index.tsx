import Image from 'next/image';
import { Box, chakra, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Container } from '../../Layout';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Clientes(): JSX.Element {
  return (
    <Box
      backgroundColor="gray.100"
      padding="60px 0"
      color="primary.800"
      position="relative"
      _before={{
        content: '""',
        display: 'none',
        width: {
          base: '80%',
          xl: '600px',
        },
        maxWidth: '800px',
        height: '2px',
        position: 'absolute',
        top: '0',
        left: '50%',
        marginLeft: {
          base: '-40%',
          xl: '-300px',
        },
        backgroundColor: 'primary.500',
      }}
    >
      <Container>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
        >
          Clientes
        </Heading>

        <Box mt="2rem">
          <Swiper
            // navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 4000 }}
            // slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
              // when window width is >= 480px
              '480': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              '640': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // when window width is >= 920px
              '1024': {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className={styles.swiperClientes}
          >
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-dentalgold.png"
                  alt="Dental Gold"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-abracinov.png"
                  alt="Associação Brasileira para Competitividade e Inovação"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-9ideia.png"
                  alt="9ideia Brasil"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-rommanel.png"
                  alt="Rommanel"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-engeselt.png"
                  alt="Engeselt"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-afrafep.png"
                  alt="Afrafep"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
            <SwiperSlide>
              <chakra.figure
                height="160px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/img/clientes/cliente-energisa-ro.png"
                  alt="Energisa Rondônia"
                  layout="fill"
                  objectFit="scale-down"
                />
              </chakra.figure>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
