import { hot } from 'jasmine-marbles';

import { POST_CREATE_STUB, POST_DTO_STUB, POST_STUB, POSTS_DTO_STUB } from '@angular-samples/redux/posts/common';

import { PostApiService } from './post-api.service';

describe('PostApiService', () => {
  let service: PostApiService;
  const mockDate = new Date('2021-06-21T06:11:03+02:00');
  const now = mockDate.toISOString();

  beforeEach(() => {
    service = new PostApiService(POSTS_DTO_STUB);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jest.spyOn<any, string>(global, 'Date').mockImplementation(() => mockDate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return posts', () => {
    const result = hot('(a|)', { a: POSTS_DTO_STUB });

    expect(service.get()).toBeObservable(result);
  });

  it('should return post', () => {
    const result = hot('(a|)', { a: POST_DTO_STUB });

    expect(service.getOne(POST_DTO_STUB.uuid)).toBeObservable(result);
  });

  it('should return new post', () => {
    const result = hot('(a|)', { a: { ...POST_CREATE_STUB, created: now, updated: now } });

    expect(service.create(POST_CREATE_STUB)).toBeObservable(result);
  });

  it('should return changed post', () => {
    const result = hot('(a|)', { a: { ...POST_STUB, updated: now } });

    expect(service.change(POST_STUB)).toBeObservable(result);
  });
});
