import { Post, PostCreate, PostDto } from './post.interface';

export const POST_DTO_STUB: PostDto = {
  uuid: '002a649b-72de-4c87-b2d5-cdc6c72d59d4',
  title: 'Smart post',
  body: 'Description for smart post.',
  created: '2022-10-23T13:47:20.777Z',
  updated: '2022-10-23T13:47:20.777Z',
};

export const POST_STUB: Post = {
  ...POST_DTO_STUB,
};

export const POST_CREATE_STUB: PostCreate = {
  uuid: '002a649b-72de-4c87-b1d6-cdc6c72d59d4',
  title: 'New smart post',
  body: 'Description for a new smart post.',
};
