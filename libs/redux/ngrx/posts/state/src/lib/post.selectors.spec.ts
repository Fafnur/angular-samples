import { crateGetEntityState } from '@angular-samples/core/testing';
import { POST_STUB, POSTS_ENTITIES_STUB, POSTS_STUB } from '@angular-samples/redux/posts/common';

import { initialPostState, postAdapter, PostState } from './post.reducer';
import * as PostSelectors from './post.selectors';

describe('Post Selectors', () => {
  const getState = crateGetEntityState(initialPostState, postAdapter);
  let state: PostState;

  it('selectPosts() should return posts', () => {
    state = getState({}, POSTS_STUB);
    const result = PostSelectors.selectPosts.projector(state);

    expect(result.length).toBe(POSTS_STUB.length);
  });

  it('selectPostsEntities() should return dictionary posts', () => {
    state = getState({}, POSTS_STUB);
    const result = PostSelectors.selectPostsEntities.projector(state);

    expect(result).toEqual(POSTS_ENTITIES_STUB);
  });

  it('selectLoaded() should return loaded', () => {
    state = getState({ loaded: true });
    const result = PostSelectors.selectLoaded.projector(state);

    expect(result).toBeTruthy();
  });

  it('selectPostById() should return post by id', () => {
    state = getState({}, POSTS_STUB);
    const result = PostSelectors.selectPostById(POST_STUB.uuid).projector(state);

    expect(result?.uuid).toBe(POST_STUB.uuid);
  });
});
