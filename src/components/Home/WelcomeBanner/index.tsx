// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { chakra } from '@chakra-ui/react';

SwiperCore.use([Pagination]);

export default function WelcomeBanner(): JSX.Element {
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
      <Swiper pagination>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </chakra.div>
  );
}
