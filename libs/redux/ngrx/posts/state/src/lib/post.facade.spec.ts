import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { ERROR_STUB } from '@angular-samples/core/testing';
import { POST_CHANGE_STUB, POST_CREATE_STUB, POST_STUB, POSTS_ENTITIES_STUB, POSTS_STUB } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';
import { NgrxPostFacade } from './post.facade';
import { initialPostState, POST_FEATURE_KEY } from './post.reducer';
import * as PostSelectors from './post.selectors';

describe('Post Selectors', () => {
  let actions: Observable<Action>;
  let mockStore: MockStore;
  let facade: NgrxPostFacade;
  let dispatchSpy: jest.SpyInstance;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [
        NgrxPostFacade,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: { [POST_FEATURE_KEY]: initialPostState },
          selectors: [
            { selector: PostSelectors.selectPostState, value: { entities: POSTS_ENTITIES_STUB } },
            { selector: PostSelectors.selectLoaded, value: true },
            { selector: PostSelectors.selectPosts, value: POSTS_STUB },
            { selector: PostSelectors.selectLastPosts, value: POSTS_STUB },
            { selector: PostSelectors.selectPopularPosts, value: POSTS_STUB },
            { selector: PostSelectors.selectPromoPosts, value: POSTS_STUB },
            { selector: PostSelectors.selectPostById(POST_STUB.uuid), value: POST_STUB },
          ],
        }),
      ],
    });

    facade = TestBed.inject(NgrxPostFacade);
    mockStore = TestBed.inject(MockStore);
    dispatchSpy = jest.spyOn(mockStore, 'dispatch');
  });

  it('should create', () => {
    expect(facade).toBeTruthy();
  });

  it('should return loaded$', () => {
    const expected = hot('a', { a: true });

    expect(facade.loaded$).toBeObservable(expected);
  });

  it('should return post$ by uuid', () => {
    const expected = hot('a', { a: POST_STUB });

    expect(facade.post$(POST_STUB.uuid)).toBeObservable(expected);
  });

  it('should return posts$', () => {
    const expected = hot('a', { a: POSTS_STUB });

    expect(facade.posts$).toBeObservable(expected);
  });

  it('should return postsPopular$', () => {
    const expected = hot('a', { a: POSTS_STUB });

    expect(facade.postsPopular$).toBeObservable(expected);
  });

  it('should return postsLast$', () => {
    const expected = hot('a', { a: POSTS_STUB });

    expect(facade.postsLast$).toBeObservable(expected);
  });

  it('should return postsPromo$', () => {
    const expected = hot('a', { a: POSTS_STUB });

    expect(facade.postsPromo$).toBeObservable(expected);
  });

  it('should emit loadSuccess$', () => {
    const action = PostActions.loadSuccess({ posts: POSTS_STUB });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: POSTS_STUB });

    expect(facade.loadSuccess$).toBeObservable(expected);
  });

  it('should emit loadFailure$', () => {
    const action = PostActions.loadFailure({ error: ERROR_STUB });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: ERROR_STUB });

    expect(facade.loadFailure$).toBeObservable(expected);
  });

  it('should emit createSuccess$', () => {
    const action = PostActions.createSuccess({ post: POST_STUB });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: POST_STUB });

    expect(facade.createSuccess$).toBeObservable(expected);
  });

  it('should emit createFailure$', () => {
    const action = PostActions.createFailure({ error: ERROR_STUB });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: ERROR_STUB });

    expect(facade.createFailure$).toBeObservable(expected);
  });

  it('should emit changeSuccess$', () => {
    const action = PostActions.changeSuccess({ post: POST_STUB });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: POST_STUB });

    expect(facade.changeSuccess$).toBeObservable(expected);
  });

  it('should emit changeFailure$', () => {
    const action = PostActions.changeFailure({ error: ERROR_STUB, uuid: POST_STUB.uuid });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: { error: ERROR_STUB, uuid: POST_STUB.uuid } });

    expect(facade.changeFailure$).toBeObservable(expected);
  });

  it('should emit removeSuccess$', () => {
    const action = PostActions.removeSuccess({ uuid: POST_STUB.uuid });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: POST_STUB.uuid });

    expect(facade.removeSuccess$).toBeObservable(expected);
  });

  it('should emit removeFailure$', () => {
    const action = PostActions.removeFailure({ error: ERROR_STUB, uuid: POST_STUB.uuid });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: { error: ERROR_STUB, uuid: POST_STUB.uuid } });

    expect(facade.removeFailure$).toBeObservable(expected);
  });

  it('should emit clearSuccess$', () => {
    const action = PostActions.clearSuccess();

    actions = hot('a', { a: action });
    const expected = hot('a', { a: undefined });

    expect(facade.clearSuccess$).toBeObservable(expected);
  });

  it('should emit clearFailure$', () => {
    const action = PostActions.clearFailure({ error: ERROR_STUB });

    actions = hot('a', { a: action });
    const expected = hot('a', { a: ERROR_STUB });

    expect(facade.clearFailure$).toBeObservable(expected);
  });

  it('load() should dispatch action', () => {
    facade.load();

    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.load());
  });

  it('create() should dispatch action', () => {
    facade.create(POST_CREATE_STUB);

    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.create({ postCreate: POST_CREATE_STUB }));
  });

  it('change() should dispatch action', () => {
    facade.change(POST_CHANGE_STUB);

    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.change({ postChange: POST_CHANGE_STUB }));
  });

  it('remove() should dispatch action', () => {
    facade.remove(POST_STUB.uuid);

    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.remove({ uuid: POST_STUB.uuid }));
  });

  it('clear() should dispatch action', () => {
    facade.clear();

    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.clear());
  });
});
