import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, map, Subject, takeUntil, tap, throwError } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';
import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

/**
 * This state using for show posts in widgets.
 */
export interface PostState {
  /**
   * Post list loading flag
   */
  readonly loaded: boolean;

  /**
   * Post ids
   */
  readonly ids: string[];

  /**
   * Dictionary posts
   */
  readonly entities: Record<string, Post>;
}

/**
 * This initial value for post state.
 */
export const initialPostState: PostState = {
  ids: [],
  entities: {},
  loaded: false,
};

/**
 * Native implementation PostFacade
 */
@Injectable()
export class NativePostFacade implements PostFacade, OnDestroy {
  /**
   * State
   * @private
   */
  private readonly state$ = new BehaviorSubject<PostState>(initialPostState);

  /**
   * Destroy
   * @private
   */
  private readonly destroy$ = new Subject<void>();

  /**
   * @inheritDoc
   */
  loaded$ = this.state$.pipe(map((state) => state.loaded));

  /**
   * @inheritDoc
   */
  posts$ = this.state$.pipe(map((state) => Object.values(state.entities)));

  /**
   * @inheritDoc
   */
  postsPromo$ = this.posts$.pipe(
    map((posts) => posts.filter((post) => post.promo).sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()))
  );

  /**
   * @inheritDoc
   */
  postsLast$ = this.posts$.pipe(map((posts) => posts.filter((post) => !post.promo).sort((a, b) => b.views - a.views)));

  /**
   * @inheritDoc
   */
  postsPopular$ = this.posts$.pipe(
    map((posts) => posts.filter((post) => !post.promo).sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()))
  );

  /**
   * @inheritDoc
   */
  loadSuccess$ = new Subject<Post[]>();

  /**
   * @inheritDoc
   */
  loadFailure$ = new Subject<unknown>();

  /**
   * @inheritDoc
   */
  loadOneSuccess$ = new Subject<Post | null>();

  /**
   * @inheritDoc
   */
  loadOneFailure$ = new Subject<unknown>();

  /**
   * @inheritDoc
   */
  createSuccess$ = new Subject<Post>();

  /**
   * @inheritDoc
   */
  createFailure$ = new Subject<unknown>();

  /**
   * @inheritDoc
   */
  changeSuccess$ = new Subject<Post>();

  /**
   * @inheritDoc
   */
  changeFailure$ = new Subject<unknown>();

  /**
   * @inheritDoc
   */
  removeSuccess$ = new Subject<string>();

  /**
   * @inheritDoc
   */
  removeFailure$ = new Subject<unknown>();

  /**
   * @inheritDoc
   */
  clearSuccess$ = new Subject<void>();

  /**
   * @inheritDoc
   */
  clearFailure$ = new Subject<unknown>();

  /**
   * @inheritDoc
   */
  post$ = (uuid: string) => this.state$.pipe(map((state) => state.entities[uuid] ?? null));

  constructor(private readonly postApiService: PostApiService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * @inheritDoc
   */
  load(): void {
    this.postApiService
      .get()
      .pipe(
        tap((posts) => {
          const state = this.state$.getValue();
          this.state$.next({
            ...state,
            ids: posts.map((post) => post.uuid),
            entities: posts.reduce((acc, current) => ({ ...acc, [current.uuid]: current }), {}),
          });
          this.loadSuccess$.next(posts);
        }),
        catchError((error) => {
          this.loadFailure$.next(error);

          return throwError(() => error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * @inheritDoc
   */
  loadOne(uuid: string) {
    this.postApiService
      .getOne(uuid)
      .pipe(
        tap((post) => {
          const state = this.state$.getValue();
          this.state$.next({
            ...state,
            ids: post && !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
            entities: post ? { ...state.entities, [post.uuid]: post } : state.entities,
          });
          this.loadOneSuccess$.next(post);
        }),
        catchError((error) => {
          this.loadOneFailure$.next(error);

          return throwError(() => error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * @inheritDoc
   */
  create(postCreate: PostCreate): void {
    this.postApiService
      .create(postCreate)
      .pipe(
        tap((post) => {
          const state = this.state$.getValue();
          this.state$.next({
            ...state,
            ids: !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
            entities: { ...state.entities, [post.uuid]: post },
          });
          this.createSuccess$.next(post);
        }),
        catchError((error) => {
          this.createFailure$.next(error);

          return throwError(() => error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * @inheritDoc
   */
  change(postChange: PostChange): void {
    this.postApiService
      .change(postChange)
      .pipe(
        tap((post) => {
          const state = this.state$.getValue();
          this.state$.next({
            ...state,
            ids: !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
            entities: { ...state.entities, [post.uuid]: post },
          });
          this.changeSuccess$.next(post);
        }),
        catchError((error) => {
          this.changeFailure$.next(error);

          return throwError(() => error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * @inheritDoc
   */
  remove(uuid: string): void {
    this.postApiService
      .remove(uuid)
      .pipe(
        tap(() => {
          const state = this.state$.getValue();
          const entities = { ...state.entities };
          delete entities[uuid];

          this.state$.next({
            ...state,
            ids: state.ids.filter((id) => id !== uuid),
            entities,
          });
          this.removeSuccess$.next(uuid);
        }),
        catchError((error) => {
          this.removeFailure$.next(error);

          return throwError(() => error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * @inheritDoc
   */
  clear(): void {
    this.postApiService
      .clear()
      .pipe(
        tap(() => {
          const state = this.state$.getValue();

          this.state$.next({
            ...state,
            ids: [],
            entities: {},
          });
          this.clearSuccess$.next();
        }),
        catchError((error) => {
          this.clearFailure$.next(error);

          return throwError(() => error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
