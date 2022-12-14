import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Post } from '@angular-samples/redux/posts/common';

/**
 * This state using for show posts in widgets.
 */
export interface PostState extends EntityState<Post, string> {
  /**
   * Post list loading flag
   */
  readonly loaded: boolean;
}

/**
 * Initial state for post state
 */
export const initialPostState: PostState = {
  loaded: false,
};

/**
 * This service using for change state.
 */
@Injectable()
@StoreConfig({ name: 'posts', idKey: 'uuid', resettable: true })
export class PostStore extends EntityStore<PostState> {
  constructor() {
    super(initialPostState);
  }
}
