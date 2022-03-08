import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  chakra,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { MdPlayCircleOutline } from 'react-icons/md';

import styles from './styles.module.scss';

import { Container } from '../../Layout';

SwiperCore.use([Pagination]);

function BannerCulturaVencedora(): JSX.Element {
  return (
    <Container
      className="container"
      height="520px"
      position="relative"
      display="flex"
      alignItems="center"
    >
      <Box
        position="relative"
        zIndex="2"
        paddingRight={{ base: '2rem', md: '2rem', lg: '0' }}
      >
        <Heading
          as="h1"
          fontSize={{
            base: '3.25rem',
            md: '5rem',
            lg: '7rem',
            xl: '8rem',
          }}
          zIndex="4"
        >
          <chakra.span display="block" lineHeight="1" color="orange.500">
            Cultura
          </chakra.span>
          <chakra.span
            display="block"
            lineHeight="1"
            fontSize={{
              base: '4.5rem',
              md: '8rem',
              lg: '10rem',
              xl: '11rem',
            }}
            color="white"
            textShadow="0 4px 4px rgba(0, 0, 0, .25)"
          >
            Vencedora
          </chakra.span>
        </Heading>
        <Heading
          as="h3"
          fontSize="1.75rem"
          lineHeight="1.2"
          fontWeight="light"
          marginLeft={{ base: '0', md: '0.5rem', lg: '1rem' }}
          color="gray.200"
        >
          Que inspira empresários e gestores de todo Brasil.
        </Heading>
      </Box>

      <chakra.img
        src="/img/fvgestao-logo-icone.svg"
        width={{ base: '560px', xl: '420px', '2xl': '520px' }}
        height={{ base: '560px', xl: '420px', '2xl': '520px' }}
        position="absolute"
        top="50%"
        right={{
          base: '-160px',
          md: '-160px',
          lg: '-160px',
          xl: '-160px',
          '2xl': '-160px',
        }}
        marginTop={{ base: '-280px', xl: '-240px', '2xl': '-210px' }}
        opacity="0.3"
        zIndex="1"
      />

      <chakra.img
        src="/img/home-banner-bg-cultura-vencedora.png"
        width={{ base: '360px', xl: '310px', '2xl': '410px' }}
        height={{ base: '650px', xl: '560px', '2xl': '740px' }}
        position="absolute"
        top="50%"
        right={{
          base: '-80px',
          md: '0px',
          lg: '60px',
          xl: '60px',
          '2xl': '120px',
        }}
        marginTop={{ base: '-325px', xl: '-280px', '2xl': '-370px' }}
        zIndex="0"
      />
    </Container>
  );
}

function BannerPremioEnergisa(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container className="container" position="relative" alignItems="center">
        <Box color="white">
          <Heading
            as="h1"
            width="100%"
            textAlign="center"
            fontSize={{ base: '3rem', md: '4.5rem', lg: '4.5rem' }}
            padding={{ base: '0.5rem 1rem 2rem 1rem', lg: '0 0 3rem 0' }}
            color="orange.500"
            lineHeight="1"
          >
            Prêmio Sinergisa
          </Heading>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              padding={{
                base: '0 0 1rem 0',
                md: '0 0 4rem 0',
                lg: '0 3rem 0 0',
              }}
              width={{ base: '100%', lg: '50%', xl: '55%' }}
            >
              <Heading
                as="h2"
                fontSize={{
                  base: '1.5rem',
                  md: '2.5rem',
                  lg: '2.25rem',
                  xl: '2.5rem',
                }}
                textAlign={{ base: 'center', lg: 'left' }}
                zIndex="4"
              >
                A FV Gestão parabeniza todas as empresas participantes e
                agradece a confiança depositada em nosso time.
              </Heading>
            </Box>
            <Box
              width={{ base: '100%', lg: '50%', xl: '45%' }}
              padding={{ base: '0', md: '0 3rem', lg: '0' }}
            >
              <chakra.figure
                width="100%"
                height={{
                  base: '260px',
                  md: '420px',
                  lg: '360px',
                  xl: '380px',
                }}
                margin={{ base: '0', lg: '0' }}
                padding="1rem"
                backgroundImage="img/home-banner-sinergisa-video-thumbnail.png"
                backgroundRepeat="no-repeat"
                backgroundPosition="center center"
                backgroundSize="cover"
                backgroundColor="orange.100"
                borderRadius="0.5rem"
                boxShadow="0 .175rem .175rem rgba(0, 0, 0, 0.15)"
              >
                <Flex
                  width="100%"
                  height="100%"
                  borderWidth="2px"
                  borderColor="orange.500"
                  borderRadius=".5rem"
                  transition="all 0.2s ease"
                  align="center"
                  justify="center"
                  color="white"
                  cursor="pointer"
                  _hover={{
                    backgroundColor: 'rgba(254, 140, 0, 0.2)',
                    color: 'orange.500',
                  }}
                  onClick={onOpen}
                >
                  <Icon as={MdPlayCircleOutline} w="4rem" h="4rem" />
                </Flex>
              </chakra.figure>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="100%" maxWidth="1024px" bgColor="transparent">
          <ModalCloseButton color="white" />
          <ModalBody padding="2.5rem" borderRadius="0">
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Prêmio Sinergisa"
                src="https://www.youtube.com/embed/ZzovC-qZ0uc"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Destaques(): JSX.Element {
  return (
    <chakra.div
      width="100%"
      height="100vh"
      backgroundColor="background.light"
      position="relative"
    >
      <chakra.div
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width={{
          base: '25%',
          xl: '48%',
        }}
        backgroundColor="background.dark"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '100%',
          width: '0px',
          height: '100vh',
          borderWidth: '100vh 250px 0 0',
          borderColor: 'transparent',
          borderTopColor: `background.dark`,
        }}
      />
      <Swiper
        className={styles.swiper}
        pagination={{
          clickable: true,
          bulletClass: `${styles.swiperPaginationBullet}`,
          bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
        }}
        loop
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <BannerCulturaVencedora />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <BannerPremioEnergisa />
        </SwiperSlide>
      </Swiper>
    </chakra.div>
  );
}
