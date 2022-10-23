import { Post, POSTS_STUB } from '@angular-samples/redux/posts/common';

import { initialPostState, postAdapter, PostState } from './post.reducer';
import * as PostSelectors from './post.selectors';

describe('Post Selectors', () => {
  const getState = (data: Partial<PostState>, entities: Post[] = []): PostState =>
    postAdapter.setAll(entities, { ...initialPostState, ...data });
  let state: PostState;

  it('getAllPost() should return the list of Post', () => {
    state = getState({}, POSTS_STUB);
    const results = PostSelectors.selectPosts(state);

    expect(results.length).toBe(POSTS_STUB.length);
  });
});
