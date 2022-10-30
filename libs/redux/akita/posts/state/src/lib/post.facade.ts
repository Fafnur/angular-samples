import { Injectable } from '@angular/core';
import { dispatch, ofType } from '@ngneat/effects';
import { Actions } from '@ngneat/effects-ng';
import { map, Observable } from 'rxjs';

import { PostChange, PostCreate } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import * as PostActions from './post.actions';
import { PostQuery } from './post.query';

@Injectable()
export class AkitaPostFacade implements PostFacade {
  loaded$ = this.postQuery.loaded$;

  posts$ = this.postQuery.posts$;

  postsPromo$ = this.postQuery.postsPromo$;

  postsLast$ = this.postQuery.postsLast$;

  postsPopular$ = this.postQuery.postsPopular$;

  loadSuccess$ = this.actions.pipe(
    ofType(PostActions.loadSuccess),
    map(({ posts }) => posts)
  );

  loadFailure$ = this.actions.pipe(
    ofType(PostActions.loadFailure),
    map(({ error }) => error)
  );

  createSuccess$ = this.actions.pipe(
    ofType(PostActions.createSuccess),
    map(({ post }) => post)
  );

  createFailure$ = this.actions.pipe(
    ofType(PostActions.createFailure),
    map(({ error }) => error)
  );

  changeSuccess$ = this.actions.pipe(
    ofType(PostActions.changeSuccess),
    map(({ post }) => post)
  );

  changeFailure$ = this.actions.pipe(
    ofType(PostActions.changeFailure),
    map(({ error, uuid }) => ({ error, uuid }))
  );

  removeSuccess$ = this.actions.pipe(
    ofType(PostActions.removeSuccess),
    map(({ uuid }) => uuid)
  );

  removeFailure$ = this.actions.pipe(
    ofType(PostActions.removeFailure),
    map(({ error, uuid }) => ({ error, uuid }))
  );

  clearSuccess$: Observable<void> = this.actions.pipe(
    ofType(PostActions.clearSuccess),
    map(() => undefined)
  );

  clearFailure$ = this.actions.pipe(
    ofType(PostActions.clearFailure),
    map(({ error }) => error)
  );

  post$ = this.postQuery.post$;

  constructor(private readonly postQuery: PostQuery, private readonly actions: Actions) {}

  load(): void {
    dispatch(PostActions.load());
  }

  create(postCreate: PostCreate): void {
    dispatch(PostActions.create({ postCreate }));
  }

  change(postChange: PostChange): void {
    dispatch(PostActions.change({ postChange }));
  }

  remove(uuid: string): void {
    dispatch(PostActions.remove({ uuid }));
  }

  clear(): void {
    dispatch(PostActions.clear());
  }
}
