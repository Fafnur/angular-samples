import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.load),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return PostActions.loadSuccess({ posts: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);

          return PostActions.loadFailure({ error });
        },
      })
    );
  });

  constructor(private readonly actions$: Actions) {}
}
