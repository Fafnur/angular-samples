import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { map, tap } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';

import { PostStore } from '../post.store';
import * as PostActions from './post.actions';

/**
 * Ngrx Effects for Akita
 */
@Injectable()
export class PostEffects implements OnInitEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.init),
      fetch({
        id: () => 'init',
        run: () => PostActions.load(),
        onError: (action, error) => console.error(error),
      })
    );
  });

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.load),
      fetch({
        id: () => 'load',
        run: () =>
          this.postApiService.get().pipe(
            tap((posts) => this.postStore.set(posts)),
            map((posts) => PostActions.loadSuccess({ posts }))
          ),
        onError: (action, error) => PostActions.loadFailure({ error }),
      })
    );
  });

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.create),
      fetch({
        id: ({ postCreate }) => `change-${postCreate.uuid}`,
        run: ({ postCreate }) =>
          this.postApiService.create(postCreate).pipe(
            tap((post) => this.postStore.add(post)),
            map((post) => PostActions.createSuccess({ post }))
          ),
        onError: (action, error) => PostActions.createFailure({ error }),
      })
    );
  });

  change$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.change),
      fetch({
        id: ({ postChange }) => `change-${postChange.uuid}`,
        run: ({ postChange }) =>
          this.postApiService.change(postChange).pipe(
            tap((post) => this.postStore.update(post.uuid, post)),
            map((post) => PostActions.changeSuccess({ post }))
          ),
        onError: ({ postChange }, error) => PostActions.changeFailure({ error, uuid: postChange.uuid }),
      })
    );
  });

  remove$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.remove),
      fetch({
        id: ({ uuid }) => `remove-${uuid}`,
        run: ({ uuid }) =>
          this.postApiService.remove(uuid).pipe(
            tap(() => this.postStore.remove(uuid)),
            map(() => PostActions.removeSuccess({ uuid }))
          ),
        onError: ({ uuid }, error) => PostActions.removeFailure({ error, uuid }),
      })
    );
  });

  clear$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.clear),
      fetch({
        id: () => 'clear',
        run: () =>
          this.postApiService.clear().pipe(
            tap(() => this.postStore.reset()),
            map(() => PostActions.clearSuccess())
          ),
        onError: (action, error) => PostActions.clearFailure({ error }),
      })
    );
  });

  constructor(private readonly actions$: Actions, private readonly postApiService: PostApiService, private readonly postStore: PostStore) {}

  ngrxOnInitEffects(): Action {
    return PostActions.init();
  }
}
