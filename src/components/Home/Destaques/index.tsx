import { useState, useEffect } from 'react';
import { chakra } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import styles from './styles.module.scss';

import BannerCulturaVencedoraV2 from './BannerCulturaVencedoraV2';
import CursoRH40 from './CursoRH40';

SwiperCore.use([Pagination]);

export default function Destaques(): JSX.Element {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    setDestaques([CursoRH40, BannerCulturaVencedoraV2]);
  }, []);

  return (
    <chakra.div
      width="100%"
      // height="100vh"
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
        loop={destaques.length > 1}
        autoplay={{
          delay: 5000,
        }}
      >
        {destaques.map(banner => (
          <SwiperSlide className={styles.swiperSlide}>{banner}</SwiperSlide>
        ))}
      </Swiper>
    </chakra.div>
  );
}
