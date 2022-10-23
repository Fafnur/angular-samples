import { Action } from '@ngrx/store';

import * as PostActions from './post.actions';
import { initialPostState, postReducer, PostState } from './post.reducer';

describe('Post Reducer', () => {
  // describe('valid Post actions', () => {
  //   it('loadPostSuccess should return the list of known Post', () => {
  //     const post = [createPostEntity('PRODUCT-AAA'), createPostEntity('PRODUCT-zzz')];
  //     const action = PostActions.loadPostSuccess({ post });
  //
  //     const result: PostState = postReducer(initialPostState, action);
  //
  //     expect(result.loaded).toBe(true);
  //     expect(result.ids.length).toBe(2);
  //   });
  // });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = postReducer(initialPostState, action);

      expect(result).toBe(initialPostState);
    });
  });
});
