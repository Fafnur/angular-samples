import { CarouselSlide } from './carousel.interface';

export const CAROUSEL_SLIDE_STUB: CarouselSlide = {
  uuid: '12323',
  title: 'Title',
  image: '/1.jpg',
};

export const CAROUSEL_SLIDE2_STUB: CarouselSlide = {
  uuid: '3121',
  title: 'Title middle',
  image: '/2.jpg',
};

export const CAROUSEL_SLIDE3_STUB: CarouselSlide = {
  uuid: '3121',
  title: 'Title last',
  image: '/3.jpg',
};

export const CAROUSEL_SLIDES_STUB: CarouselSlide[] = [CAROUSEL_SLIDE_STUB, CAROUSEL_SLIDE2_STUB, CAROUSEL_SLIDE3_STUB];
