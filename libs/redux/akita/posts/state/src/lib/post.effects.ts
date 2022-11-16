import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngneat/effects';
import { Actions } from '@ngneat/effects-ng';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';

import * as PostActions from './post.actions';
import { PostStore } from './post.store';

/**
 * Ngrx effects for posts entities.
 *
 * TODO: Need to run after init like as ngrxOnInitEffects
 */
@Injectable()
export class PostEffects {
  /**
   * Effect to call loading of list posts after feature store initialization.
   */
  init$ = createEffect(() => {
    return this.actions.pipe(
      ofType(PostActions.init),
      map(() => PostActions.load())
    );
  });

  /**
   * Effect for loading of list posts.
   */
  load$ = createEffect(() => {
    return this.actions.pipe(
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

  /**
   * Effect for load a post by id.
   */
  loadOne$ = createEffect(() => {
    return this.actions.pipe(
      ofType(PostActions.loadOne),
      switchMap(({ uuid }) =>
        this.postApiService.getOne(uuid).pipe(
          tap((post) => (post ? this.postStore.add(post) : undefined)),
          map((post) => PostActions.loadOneSuccess({ post })),
          catchError((error) => of(PostActions.loadOneFailure({ error, uuid })))
        )
      )
    );
  });

  /**
   * Effect for creating a new post.
   */
  create$ = createEffect(() => {
    return this.actions.pipe(
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

  /**
   * Effect for changing a post.
   */
  change$ = createEffect(() => {
    return this.actions.pipe(
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

  /**
   * Effect for removing a post.
   */
  remove$ = createEffect(() => {
    return this.actions.pipe(
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

  /**
   * Effect for removing all posts.
   */
  clear$ = createEffect(() => {
    return this.actions.pipe(
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

  constructor(private readonly postApiService: PostApiService, private readonly postStore: PostStore, private readonly actions: Actions) {}
}
