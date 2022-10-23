import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PostActions from './post.actions';
import * as PostSelectors from './post.selectors';

@Injectable()
export class PostFacade {
  loaded$ = this.store.select(PostSelectors.selectLoaded);

  posts$ = this.store.select(PostSelectors.selectPosts);

  post$ = (uuid: string) => this.store.select(PostSelectors.selectPostById(uuid));

  constructor(private readonly store: Store) {}

  load(): void {
    this.store.dispatch(PostActions.load());
  }
}
