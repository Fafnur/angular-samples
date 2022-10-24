import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';

import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {
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
}
