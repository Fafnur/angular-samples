import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs';

import { PostState, PostStore } from './post.store';

/**
 * This service is used to subscribe to selectors.
 */
@Injectable()
export class PostQuery extends QueryEntity<PostState> {
  /**
   * Selector that returns the loaded from state.
   */
  loaded$ = this.select((state) => state.loaded);

  /**
   * Selector that returns of all posts from state.
   */
  posts$ = this.selectAll();

  /**
   * Selector that returns a list of the promo posts from a state.
   */
  postsPromo$ = this.selectAll({
    filterBy: [({ promo }) => promo],
    sortBy: (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  });

  /**
   * Selector that returns a list of the popular posts from a state.
   */
  postsPopular$ = this.selectAll({
    filterBy: [({ promo }) => !promo],
    sortBy: (a, b) => b.views - a.views,
  });

  /**
   * Selector that returns a list of the latest posts from a state.
   */
  postsLast$ = this.selectAll({
    filterBy: [({ promo }) => !promo],
    sortBy: (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  });

  /**
   * Selector that returns a post by id.
   */
  post$ = (uuid: string) => this.selectEntity(uuid).pipe(map((post) => post ?? null));

  /**
   * Post query constructor
   * @param store Post store service for change state
   */
  constructor(protected override store: PostStore) {
    super(store);
  }
}
