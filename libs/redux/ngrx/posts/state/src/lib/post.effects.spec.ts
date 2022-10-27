import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { deepEqual, mock, when } from 'ts-mockito';

import { ERROR_STUB, providerOf } from '@angular-samples/core/testing';
import { PostApiService } from '@angular-samples/redux/posts/api';
import { POST_CHANGE_STUB, POST_CREATE_STUB, POST_STUB, POSTS_STUB } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';
import { PostEffects } from './post.effects';
import { initialPostState, POST_FEATURE_KEY } from './post.reducer';

describe('PostEffects', () => {
  let actions: Observable<Action>;
  let effects: PostEffects;
  let postApiServiceMock: PostApiService;

  beforeAll(() => {
    postApiServiceMock = mock(postApiServiceMock);

    TestBed.configureTestingModule({
      providers: [
        PostEffects,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: { [POST_FEATURE_KEY]: initialPostState },
        }),
        providerOf(PostApiService, postApiServiceMock),
      ],
    });

    effects = TestBed.inject(PostEffects);
  });

  it('init$ should return load()', () => {
    actions = hot('a', { a: PostActions.init() });
    const expected = hot('a', { a: PostActions.load() });

    expect(effects.init$).toBeObservable(expected);
  });

  it('load$ should return loadSuccess()', () => {
    actions = hot('a', { a: PostActions.load() });

    const expected = hot('a', { a: PostActions.loadSuccess({ posts: POSTS_STUB }) });
    when(postApiServiceMock.get()).thenReturn(hot('a', { a: POSTS_STUB }));

    expect(effects.load$).toBeObservable(expected);
  });

  it('load$ should return loadFailure()', () => {
    actions = hot('a', { a: PostActions.load() });

    const expected = hot('a', { a: PostActions.loadFailure({ error: ERROR_STUB }) });
    when(postApiServiceMock.get()).thenReturn(hot('#', {}, ERROR_STUB));

    expect(effects.load$).toBeObservable(expected);
  });

  it('create$ should return createSuccess()', () => {
    actions = hot('a', { a: PostActions.create({ postCreate: POST_CREATE_STUB }) });

    const expected = hot('a', { a: PostActions.createSuccess({ post: POST_STUB }) });
    when(postApiServiceMock.create(deepEqual(POST_CREATE_STUB))).thenReturn(hot('a', { a: POST_STUB }));

    expect(effects.create$).toBeObservable(expected);
  });

  it('create$ should return createFailure()', () => {
    actions = hot('a', { a: PostActions.create({ postCreate: POST_CREATE_STUB }) });

    const expected = hot('a', { a: PostActions.createFailure({ error: ERROR_STUB }) });
    when(postApiServiceMock.create(deepEqual(POST_CREATE_STUB))).thenReturn(hot('#', {}, ERROR_STUB));

    expect(effects.create$).toBeObservable(expected);
  });

  it('change$ should return changeSuccess()', () => {
    actions = hot('a', { a: PostActions.change({ postChange: POST_CHANGE_STUB }) });

    const expected = hot('a', { a: PostActions.changeSuccess({ post: POST_STUB }) });
    when(postApiServiceMock.change(deepEqual(POST_CHANGE_STUB))).thenReturn(hot('a', { a: POST_STUB }));

    expect(effects.change$).toBeObservable(expected);
  });

  it('change$ should return changeFailure()', () => {
    actions = hot('a', { a: PostActions.change({ postChange: POST_CHANGE_STUB }) });

    const expected = hot('a', { a: PostActions.changeFailure({ error: ERROR_STUB, uuid: POST_CHANGE_STUB.uuid }) });
    when(postApiServiceMock.change(deepEqual(POST_CHANGE_STUB))).thenReturn(hot('#', {}, ERROR_STUB));

    expect(effects.change$).toBeObservable(expected);
  });

  it('remove$ should return removeSuccess()', () => {
    actions = hot('a', { a: PostActions.remove({ uuid: POST_STUB.uuid }) });

    const expected = hot('a', { a: PostActions.removeSuccess({ uuid: POST_STUB.uuid }) });
    when(postApiServiceMock.remove(POST_STUB.uuid)).thenReturn(hot('a', { a: POST_STUB }));

    expect(effects.remove$).toBeObservable(expected);
  });

  it('remove$ should return removeFailure()', () => {
    actions = hot('a', { a: PostActions.remove({ uuid: POST_STUB.uuid }) });

    const expected = hot('a', { a: PostActions.removeFailure({ error: ERROR_STUB, uuid: POST_STUB.uuid }) });
    when(postApiServiceMock.remove(POST_STUB.uuid)).thenReturn(hot('#', {}, ERROR_STUB));

    expect(effects.remove$).toBeObservable(expected);
  });
  it('clear$ should return clearSuccess()', () => {
    actions = hot('a', { a: PostActions.clear() });

    const expected = hot('a', { a: PostActions.clearSuccess() });
    when(postApiServiceMock.clear()).thenReturn(hot('a', { a: POST_STUB }));

    expect(effects.clear$).toBeObservable(expected);
  });

  it('clear$ should return clearFailure()', () => {
    actions = hot('a', { a: PostActions.clear() });

    const expected = hot('a', { a: PostActions.clearFailure({ error: ERROR_STUB }) });
    when(postApiServiceMock.clear()).thenReturn(hot('#', {}, ERROR_STUB));

    expect(effects.clear$).toBeObservable(expected);
  });
});
