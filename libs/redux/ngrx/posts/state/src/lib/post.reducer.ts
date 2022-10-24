import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Post } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';

export const POST_FEATURE_KEY = 'posts';

export interface PostState extends EntityState<Post> {
  loaded: boolean;
}

export interface PostPartialState {
  readonly [POST_FEATURE_KEY]: PostState;
}

export const postAdapter = createEntityAdapter<Post>({
  selectId: (entity) => entity.uuid,
});

export const initialPostState: PostState = postAdapter.getInitialState({
  loaded: false,
});

const reducer = createReducer(
  initialPostState,
  on(
    PostActions.loadSuccess,
    (state, { posts }): PostState =>
      postAdapter.setAll(posts, {
        ...state,
        loaded: true,
      })
  ),
  on(PostActions.clearSuccess, (state): PostState => postAdapter.removeAll(state)),
  on(PostActions.loadOneSuccess, PostActions.createSuccess, (state, { post }): PostState => postAdapter.upsertOne(post, state)),
  on(PostActions.removeSuccess, (state, { uuid }): PostState => postAdapter.removeOne(uuid, state)),
  on(
    PostActions.changeSuccess,
    (state, { post }): PostState =>
      postAdapter.updateOne(
        {
          id: post.uuid,
          changes: post,
        },
        state
      )
  )
);

export function postReducer(state: PostState | undefined, action: Action): PostState {
  return reducer(state, action);
}
