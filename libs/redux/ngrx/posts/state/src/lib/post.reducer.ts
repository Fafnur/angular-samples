import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Post } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';

export const POST_FEATURE_KEY = 'posts';

/**
 * This state using for show posts in widgets.
 */
export interface PostState extends EntityState<Post> {
  /**
   * Post list loading flag
   */
  readonly loaded: boolean;
}

/**
 * This adapter using for changing collection posts in state.
 */
export const postAdapter = createEntityAdapter<Post>({
  selectId: (entity) => entity.uuid,
});

/**
 * This initial value for post state.
 */
export const initialPostState: PostState = postAdapter.getInitialState({
  loaded: false,
});

/**
 * This reducer using for change state. When action was dispatched, the reducer changes the state.
 */
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

/**
 * Post reducer
 *
 * @param state Post State
 * @param action The action that was dispatched
 */
export function postReducer(state: PostState | undefined, action: Action): PostState {
  return reducer(state, action);
}
