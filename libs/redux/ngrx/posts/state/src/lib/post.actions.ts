import { createAction, props } from '@ngrx/store';

import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';

// Init
export const init = createAction('[Post] Init');

// Load all
export const load = createAction('[Post] Load');

export const loadSuccess = createAction('[Post] Load Success', props<{ posts: Post[] }>());

export const loadFailure = createAction('[Post] Load Failure', props<{ error: unknown }>());

// Load one
export const loadOne = createAction('[Post] Load One', props<{ uuid: string }>());

export const loadOneSuccess = createAction('[Post] Load One Success', props<{ post: Post }>());

export const loadOneFailure = createAction('[Post] Load One Failure', props<{ error: unknown; uuid: string }>());

// Create
export const create = createAction('[Post] Create', props<{ postCreate: PostCreate }>());

export const createSuccess = createAction('[Post] Create Success', props<{ post: Post }>());

export const createFailure = createAction('[Post] Create Failure', props<{ error: unknown }>());

// Change
export const change = createAction('[Post] Change', props<{ postChange: PostChange }>());

export const changeSuccess = createAction('[Post] Change Success', props<{ post: Post }>());

export const changeFailure = createAction('[Post] Change Failure', props<{ error: unknown; uuid: string }>());

// Remove
export const remove = createAction('[Post] Remove', props<{ uuid: string }>());

export const removeSuccess = createAction('[Post] Remove Success', props<{ uuid: string }>());

export const removeFailure = createAction('[Post] Remove Failure', props<{ error: unknown; uuid: string }>());

// Remove all
export const clear = createAction('[Post] Clear');

export const clearSuccess = createAction('[Post] Clear Success');

export const clearFailure = createAction('[Post] Clear Failure', props<{ error: unknown }>());
