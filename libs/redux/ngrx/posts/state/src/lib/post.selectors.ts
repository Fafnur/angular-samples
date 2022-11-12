import { createFeatureSelector, createSelector } from '@ngrx/store';

import { POST_FEATURE_KEY, postAdapter, PostState } from './post.reducer';

/**
 * Selector that returns the full state.
 */
export const selectPostState = createFeatureSelector<PostState>(POST_FEATURE_KEY);

/**
 * Selectors that allow you to return a collection and dictionary of entities.
 */
const { selectAll, selectEntities } = postAdapter.getSelectors();

/**
 * Selector that returns the loaded from state.
 */
export const selectLoaded = createSelector(selectPostState, (state) => state.loaded);

/**
 * Selector that returns of all posts from state.
 */
export const selectPosts = createSelector(selectPostState, (state) => selectAll(state));

/**
 * Selector that returns a list of the promo posts from a state.
 */
export const selectPromoPosts = createSelector(selectPosts, (posts) =>
  posts.filter((post) => post.promo).sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
);

/**
 * Selector that returns a list of the popular posts from a state.
 */
export const selectPopularPosts = createSelector(selectPosts, (posts) =>
  posts.filter((post) => !post.promo).sort((a, b) => b.views - a.views)
);

/**
 * Selector that returns a list of the latest posts from a state.
 */
export const selectLastPosts = createSelector(selectPosts, (posts) =>
  posts.filter((post) => !post.promo).sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
);

/**
 * Selector that returns a dictionary of posts.
 */
export const selectPostsEntities = createSelector(selectPostState, (state) => selectEntities(state));

/**
 * Selector that returns a post by id.
 */
export const selectPostById = (uuid: string) => createSelector(selectPostState, (state) => state.entities[uuid] ?? null);
