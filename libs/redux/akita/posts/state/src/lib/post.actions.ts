import { createAction, props } from '@ngneat/effects';

import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';

/**
 * This action need to load posts after the feature store has been initialized.
 */
export const init = createAction('[Post] Init');

/**
 * This action starts the loading the list of posts.
 */
export const load = createAction('[Post] Load');

/**
 * This action completes the loading of the list of posts and the saving posts on state.
 */
export const loadSuccess = createAction('[Post] Load Success', props<{ posts: Post[] }>());

/**
 * This action completes the loading of the list of posts and returns an API error.
 */
export const loadFailure = createAction('[Post] Load Failure', props<{ error: unknown }>());

/**
 * This action starts the loading a post by id.
 */
export const loadOne = createAction('[Post] Load One', props<{ uuid: string }>());

/**
 * This action completes the loading a post and the saving post on state.
 */
export const loadOneSuccess = createAction('[Post] Load One Success', props<{ post: Post | null }>());

/**
 * This action completes the loading a post and returns an API error.
 */
export const loadOneFailure = createAction('[Post] Load One Failure', props<{ error: unknown; uuid: string }>());

/**
 * This action starts the creation of a post.
 */
export const create = createAction('[Post] Create', props<{ postCreate: PostCreate }>());

/**
 * This action completes the creation of a post and the saving of the post on state.
 */
export const createSuccess = createAction('[Post] Create Success', props<{ post: Post }>());

/**
 * This action completes the creation of a post and returns an API error.
 */
export const createFailure = createAction('[Post] Create Failure', props<{ error: unknown }>());

/**
 * This action starts the changing of a post.
 */
export const change = createAction('[Post] Change', props<{ postChange: PostChange }>());

/**
 * This action completes the changing of a post and the saving of the post on state.
 */
export const changeSuccess = createAction('[Post] Change Success', props<{ post: Post }>());

/**
 * This action completes the changing of a post and returns an API error.
 */
export const changeFailure = createAction('[Post] Change Failure', props<{ error: unknown; uuid: string }>());

/**
 * This action starts the removing of a post.
 */
export const remove = createAction('[Post] Remove', props<{ uuid: string }>());

/**
 * This action completes the removing of a post and the removing of the post from state.
 */
export const removeSuccess = createAction('[Post] Remove Success', props<{ uuid: string }>());

/**
 * This action completes the removing of a post and returns an API error.
 */
export const removeFailure = createAction('[Post] Remove Failure', props<{ error: unknown; uuid: string }>());

/**
 * This action starts the removing of all posts.
 */
export const clear = createAction('[Post] Clear');

/**
 * This action completes the removing of all posts and the removing all posts from state.
 */
export const clearSuccess = createAction('[Post] Clear Success');

/**
 * This action completes the removing of all posts and returns an API error.
 */
export const clearFailure = createAction('[Post] Clear Failure', props<{ error: unknown }>());
