import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@ngrx/router-store/data-persistence';
import { map } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';

import * as PostActions from './post.actions';

/**
 * Ngrx effects for posts entities.
 */
@Injectable()
export class PostEffects implements OnInitEffects {
  /**
   * Effect to call loading of list posts after feature store initialization.
   */
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

  /**
   * Effect for loading of list posts.
   */
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.load),
      fetch({
        id: () => 'load',
        run: () => this.postApiService.get().pipe(map((posts) => PostActions.loadSuccess({ posts }))),
        onError: (action, error) => PostActions.loadFailure({ error }),
      })
    );
  });

  /**
   * Effect for creating a new post.
   */
  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.create),
      fetch({
        id: ({ postCreate }) => `change-${postCreate.uuid}`,
        run: ({ postCreate }) => this.postApiService.create(postCreate).pipe(map((post) => PostActions.createSuccess({ post }))),
        onError: (action, error) => PostActions.createFailure({ error }),
      })
    );
  });

  /**
   * Effect for changing a post.
   */
  change$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.change),
      fetch({
        id: ({ postChange }) => `change-${postChange.uuid}`,
        run: ({ postChange }) => this.postApiService.change(postChange).pipe(map((post) => PostActions.changeSuccess({ post }))),
        onError: ({ postChange }, error) => PostActions.changeFailure({ error, uuid: postChange.uuid }),
      })
    );
  });

  /**
   * Effect for removing a post.
   */
  remove$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.remove),
      fetch({
        id: ({ uuid }) => `remove-${uuid}`,
        run: ({ uuid }) => this.postApiService.remove(uuid).pipe(map(() => PostActions.removeSuccess({ uuid }))),
        onError: ({ uuid }, error) => PostActions.removeFailure({ error, uuid }),
      })
    );
  });

  /**
   * Effect for removing all posts.
   */
  clear$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.clear),
      fetch({
        id: () => 'clear',
        run: () => this.postApiService.clear().pipe(map(() => PostActions.clearSuccess())),
        onError: (action, error) => PostActions.clearFailure({ error }),
      })
    );
  });

  constructor(private readonly actions$: Actions, private readonly postApiService: PostApiService) {}

  ngrxOnInitEffects(): Action {
    return PostActions.init();
  }
}
