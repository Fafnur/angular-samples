import { createFeatureSelector, createSelector } from '@ngrx/store';

import { POST_FEATURE_KEY, postAdapter, PostState } from './post.reducer';

const selectPostState = createFeatureSelector<PostState>(POST_FEATURE_KEY);

const { selectAll, selectEntities } = postAdapter.getSelectors();

export const selectLoaded = createSelector(selectPostState, (state: PostState) => state.loaded);

export const selectPosts = createSelector(selectPostState, (state: PostState) => selectAll(state));

export const selectPostsEntities = createSelector(selectPostState, (state: PostState) => selectEntities(state));

export const selectPostById = (uuid: string) => createSelector(selectPostsEntities, (entities) => entities[uuid] ?? null);
