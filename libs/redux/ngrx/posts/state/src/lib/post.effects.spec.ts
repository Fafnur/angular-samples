import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PostActions from './post.actions';
import { PostEffects } from './post.effects';

describe('PostEffects', () => {
  let actions: Observable<Action>;
  let effects: PostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [PostEffects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(PostEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PostActions.initPost() });

      const expected = hot('-a-|', { a: PostActions.loadPostSuccess({ post: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
