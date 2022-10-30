import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngneat/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';

import * as PostActions from './post.actions';
import { PostStore } from './post.store';

/**
 * TODO: Need to run after init like as ngrxOnInitEffects
 */
@Injectable()
export class PostEffects {
  init$ = createEffect((actions) => {
    return actions.pipe(
      ofType(PostActions.init),
      map(() => PostActions.load())
    );
  });

  loadTodos$ = createEffect((actions) => {
    return actions.pipe(
      ofType(PostActions.load),
      switchMap(() =>
        this.postApiService.get().pipe(
          tap((posts) => this.postStore.set(posts)),
          map((posts) => PostActions.loadSuccess({ posts })),
          catchError((error) => of(PostActions.loadFailure({ error })))
        )
      )
    );
  });

  create$ = createEffect((actions) => {
    return actions.pipe(
      ofType(PostActions.create),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      switchMap(({ postCreate }: any) =>
        this.postApiService.create(postCreate).pipe(
          tap((post) => this.postStore.add(post)),
          map((post) => PostActions.createSuccess({ post })),
          catchError((error) => of(PostActions.createFailure({ error })))
        )
      )
    );
  });

  change$ = createEffect((actions) => {
    return actions.pipe(
      ofType(PostActions.change),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      switchMap(({ postChange }: any) =>
        this.postApiService.change(postChange).pipe(
          tap((post) => this.postStore.update(post.uuid, post)),
          map((post) => PostActions.changeSuccess({ post })),
          catchError((error) => of(PostActions.changeFailure({ error, uuid: postChange.uuid })))
        )
      )
    );
  });

  remove$ = createEffect((actions) => {
    return actions.pipe(
      ofType(PostActions.remove),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      switchMap(({ uuid }: any) =>
        this.postApiService.remove(uuid).pipe(
          tap(() => this.postStore.remove(uuid)),
          map(() => PostActions.removeSuccess({ uuid })),
          catchError((error) => of(PostActions.removeFailure({ error, uuid })))
        )
      )
    );
  });

  clear$ = createEffect((actions) => {
    return actions.pipe(
      ofType(PostActions.clear),
      switchMap(() =>
        this.postApiService.clear().pipe(
          tap(() => this.postStore.reset()),
          map(() => PostActions.clearSuccess()),
          catchError((error) => of(PostActions.clearFailure({ error })))
        )
      )
    );
  });

  constructor(private readonly postApiService: PostApiService, private readonly postStore: PostStore) {}
}
