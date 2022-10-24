import { Action } from '@ngrx/store';

import { crateGetEntityState } from '@angular-samples/core/testing';
import { Post, POST_STUB, POSTS_STUB } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';
import { initialPostState, postAdapter, postReducer, PostState } from './post.reducer';

describe('Post Reducer', () => {
  const getState = crateGetEntityState(initialPostState, postAdapter);
  let state: PostState;

  beforeEach(() => {
    state = getState();
  });

  it('loadSuccess() should set posts', () => {
    const action = PostActions.loadSuccess({ posts: POSTS_STUB });
    const result = postReducer(state, action);

    expect(result.ids.length).toBe(POSTS_STUB.length);
  });

  it('clearSuccess() should remove posts', () => {
    state = getState({}, POSTS_STUB);
    const action = PostActions.clearSuccess();
    const result = postReducer(state, action);

    expect(result.ids.length).toBe(0);
  });

  it('loadOneSuccess() should set post', () => {
    const action = PostActions.loadOneSuccess({ post: POST_STUB });
    const result = postReducer(state, action);

    expect(result.ids.length).toBe(1);
  });

  it('createSuccess() should set post', () => {
    const action = PostActions.createSuccess({ post: POST_STUB });
    const result = postReducer(state, action);

    expect(result.ids.length).toBe(1);
  });

  it('removeSuccess() should remove post', () => {
    state = getState({}, POSTS_STUB);
    const action = PostActions.removeSuccess({ uuid: POST_STUB.uuid });
    const result = postReducer(state, action);

    expect(result.ids.length).toBe(0);
  });

  it('changeSuccess() should change post', () => {
    state = getState({}, POSTS_STUB);
    const postChanged: Post = { ...POST_STUB, title: 'Long title' };
    const action = PostActions.changeSuccess({ post: postChanged });
    const result = postReducer(state, action);

    expect(result.entities[postChanged.uuid]?.title).toBe(postChanged.title);
  });

  it('should return the previous state', () => {
    const action = {} as Action;

    const result = postReducer(initialPostState, action);

    expect(result).toBe(initialPostState);
  });
});
