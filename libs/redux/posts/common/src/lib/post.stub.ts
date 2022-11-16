import { Post, PostChange, PostCreate, PostDto } from './post.interface';

/**
 * Post dto stub is for tests only
 */
export const POST_DTO_STUB: PostDto = {
  uuid: '002a649b-72de-4c87-b2d5-cdc6c72d59d4',
  title: 'Smart post',
  body: 'Description for smart post.',
  created: '2022-10-23T13:47:20.777Z',
  updated: '2022-10-23T13:47:20.777Z',
  promo: false,
  views: 1234,
  likes: 102,
  image: 'https://panorama.pub/storage/images/90/89/c82d5a671cc3758596b003e79d26/previews/15081-main.jpg.webp',
};

/**
 * Collection post dto stub is for tests only
 */
export const POSTS_DTO_STUB: Post[] = [POST_DTO_STUB];

/**
 * Post stub is for tests only
 */
export const POST_STUB: Post = {
  ...POST_DTO_STUB,
};

/**
 * Collection posts stub is for tests only
 */
export const POSTS_STUB: Post[] = [POST_STUB];

/**
 * Dictionary posts stub is for tests only
 */
export const POSTS_ENTITIES_STUB: Record<string, Post> = {
  [POST_STUB.uuid]: POST_STUB,
};

/**
 * Post create stub is for tests only
 */
export const POST_CREATE_STUB: PostCreate = {
  uuid: '002a649b-72de-4c87-b1d6-cdc6c72d59d4',
  title: 'New smart post',
  body: 'Description for a new smart post.',
  promo: false,
  image: 'https://panorama.pub/storage/images/90/89/c82d5a671cc3758596b003e79d26/previews/15081-main.jpg.webp',
};

/**
 * Post change stub is for tests only
 */
export const POST_CHANGE_STUB: PostChange = {
  uuid: POST_STUB.uuid,
  title: 'Old smart post',
};
