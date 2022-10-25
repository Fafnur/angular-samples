import { createFeatureSelector, createSelector } from '@ngrx/store';

import { POST_FEATURE_KEY, postAdapter, PostState } from './post.reducer';

export const selectPostState = createFeatureSelector<PostState>(POST_FEATURE_KEY);

const { selectAll, selectEntities } = postAdapter.getSelectors();

export const selectLoaded = createSelector(selectPostState, (state) => state.loaded);

export const selectPosts = createSelector(selectPostState, (state) => selectAll(state));

export const selectPromoPosts = createSelector(selectPosts, (posts) =>
  posts.filter((post) => post.promo).sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
);

export const selectPostsEntities = createSelector(selectPostState, (state) => selectEntities(state));

export const selectPostById = (uuid: string) => createSelector(selectPostState, (state) => state.entities[uuid] ?? null);
