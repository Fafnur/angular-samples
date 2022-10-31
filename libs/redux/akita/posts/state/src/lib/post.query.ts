import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs';

import { PostState, PostStore } from './post.store';

@Injectable()
export class PostQuery extends QueryEntity<PostState> {
  loaded$ = this.select((state) => state.loaded);

  posts$ = this.selectAll();

  postsPromo$ = this.selectAll({
    filterBy: [({ promo }) => promo],
    sortBy: (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  });

  postsPopular$ = this.selectAll({
    filterBy: [({ promo }) => !promo],
    sortBy: (a, b) => b.views - a.views,
  });

  postsLast$ = this.selectAll({
    filterBy: [({ promo }) => !promo],
    sortBy: (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  });

  post$ = (uuid: string) => this.selectEntity(uuid).pipe(map((post) => post ?? null));

  constructor(protected override store: PostStore) {
    super(store);
  }
}
