export interface CarouselSlide {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  uuid: string | number;
  image: string | null;
  title: string;
}
