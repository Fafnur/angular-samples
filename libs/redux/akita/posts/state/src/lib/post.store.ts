import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Post } from '@angular-samples/redux/posts/common';

export interface PostState extends EntityState<Post, string> {
  readonly loaded: boolean;
}

@Injectable()
@StoreConfig({ name: 'posts', idKey: 'uuid', resettable: true })
export class PostStore extends EntityStore<PostState> {
  constructor() {
    super();
  }
}
