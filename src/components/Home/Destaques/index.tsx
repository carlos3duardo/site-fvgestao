import { chakra } from '@chakra-ui/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Navigation, Pagination } from 'swiper';

import styles from './styles.module.scss';

import BannerCulturaVencedoraV2 from './BannerCulturaVencedoraV2';

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <chakra.div
      className={styles.swiperButtonPrev}
      onClick={() => swiper.slidePrev()}
    >
      <BsChevronLeft />
    </chakra.div>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <chakra.div
      className={styles.swiperButtonNext}
      onClick={() => swiper.slideNext()}
    >
      <BsChevronRight />
    </chakra.div>
  );
}

export default function Destaques(): JSX.Element {
  const destaques = [BannerCulturaVencedoraV2];

  return (
    <chakra.div
      width="100%"
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
        navigation={{
          prevEl: `${styles.swiperButtonPrev}`,
          nextEl: `${styles.swiperButtonNext}`,
        }}
        modules={destaques.length > 1 ? [Pagination, Navigation] : []}
        pagination={{
          clickable: true,
          bulletClass: `${styles.swiperPaginationBullet}`,
          bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
        }}
        loop={destaques.length > 1}
        autoplay={{ delay: 5000 }}
      >
        {destaques.length > 1 ? (
          <>
            <SlidePrevButton />
            <SlideNextButton />
          </>
        ) : (
          ''
        )}

        {destaques.map((banner, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {banner}
          </SwiperSlide>
        ))}
      </Swiper>
    </chakra.div>
  );
}
