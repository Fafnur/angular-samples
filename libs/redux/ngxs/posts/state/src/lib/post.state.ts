import { Injectable } from '@angular/core';
import { Action, createSelector, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';
import { Post } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';

/**
 * This state using for show posts in widgets.
 */
export interface PostStateModel {
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
export const initialPostState: PostStateModel = {
  ids: [],
  entities: {},
  loaded: false,
};

/**
 * This service using for change state, dispatch actions and subscribe on selectors.
 * In Ngrx this merges selectors, reducer and effects.
 */
@State<PostStateModel>({
  name: 'posts',
  defaults: initialPostState,
})
@Injectable()
export class PostState implements NgxsOnInit {
  /**
   * Selector that returns the loaded from state.
   */
  @Selector()
  static loaded(state: PostStateModel): boolean {
    return state.loaded;
  }

  /**
   * Selector that returns of all posts from state.
   */
  @Selector()
  static posts(state: PostStateModel): Post[] {
    return Object.values(state.entities);
  }

  /**
   * Selector that returns a list of the promo posts from a state.
   */
  @Selector()
  static postsPromo(state: PostStateModel): Post[] {
    return Object.values(state.entities)
      .filter((post) => post.promo)
      .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  }

  /**
   * Selector that returns a list of the latest posts from a state.
   */
  @Selector()
  static postsLast(state: PostStateModel): Post[] {
    return Object.values(state.entities)
      .filter((post) => !post.promo)
      .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  }

  /**
   * Selector that returns a list of the popular posts from a state.
   */
  @Selector()
  static postsPopular(state: PostStateModel): Post[] {
    return Object.values(state.entities)
      .filter((post) => !post.promo)
      .sort((a, b) => b.views - a.views);
  }

  /**
   * Selector that returns a post by id.
   */
  static post(uuid: string): (state: PostStateModel) => Post | null {
    return createSelector([PostState], (state: PostStateModel) => {
      return state.entities[uuid] ?? null;
    });
  }

  /**
   * Post state constructor
   * @param postApiService Post API service for CRUD operation
   */
  constructor(private readonly postApiService: PostApiService) {}

  ngxsOnInit(ctx: StateContext<PostStateModel>): void {
    ctx.dispatch(new PostActions.Load());
  }

  /**
   * Action for loading of list posts.
   */
  @Action(PostActions.Load)
  load(ctx: StateContext<PostStateModel>) {
    return this.postApiService.get().pipe(
      tap((posts) => ctx.dispatch(new PostActions.LoadSuccess(posts))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.LoadFailure(error)))
    );
  }

  /**
   * Action success for loading of list posts.
   */
  @Action(PostActions.LoadSuccess)
  loadSuccess(ctx: StateContext<PostStateModel>, { posts }: PostActions.LoadSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: posts.map((post) => post.uuid),
      entities: posts.reduce((acc, current) => ({ ...acc, [current.uuid]: current }), {}),
    });
  }

  /**
   * Action for loading a post by id.
   */
  @Action(PostActions.LoadOne)
  loadOne(ctx: StateContext<PostStateModel>, { uuid }: PostActions.LoadOne) {
    return this.postApiService.getOne(uuid).pipe(
      tap((post) => ctx.dispatch(new PostActions.LoadOneSuccess(post))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.LoadOneFailure(error, uuid)))
    );
  }

  /**
   * Action success for loading a post by id.
   */
  @Action(PostActions.LoadOneSuccess)
  loadOneSuccess(ctx: StateContext<PostStateModel>, { post }: PostActions.LoadOneSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: post && !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
      entities: post ? { ...state.entities, [post.uuid]: post } : state.entities,
    });
  }

  /**
   * Action for creating a new post.
   */
  @Action(PostActions.Create)
  create(ctx: StateContext<PostStateModel>, { postCreate }: PostActions.Create) {
    return this.postApiService.create(postCreate).pipe(
      tap((post) => ctx.dispatch(new PostActions.CreateSuccess(post))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.CreateFailure(error)))
    );
  }

  /**
   * Action success for creating a new post.
   */
  @Action(PostActions.CreateSuccess)
  createSuccess(ctx: StateContext<PostStateModel>, { post }: PostActions.CreateSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
      entities: { ...state.entities, [post.uuid]: post },
    });
  }

  /**
   * Action for changing a post.
   */
  @Action(PostActions.Change)
  change(ctx: StateContext<PostStateModel>, { postChange }: PostActions.Change) {
    return this.postApiService.change(postChange).pipe(
      tap((post) => ctx.dispatch(new PostActions.ChangeSuccess(post))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.ChangeFailure(error, postChange.uuid)))
    );
  }

  /**
   * Action success for changing a post.
   */
  @Action(PostActions.ChangeSuccess)
  changeSuccess(ctx: StateContext<PostStateModel>, { post }: PostActions.ChangeSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
      entities: { ...state.entities, [post.uuid]: post },
    });
  }

  /**
   * Action for removing a post.
   */
  @Action(PostActions.Remove)
  remove(ctx: StateContext<PostStateModel>, { uuid }: PostActions.Remove) {
    return this.postApiService.remove(uuid).pipe(
      tap(() => ctx.dispatch(new PostActions.RemoveSuccess(uuid))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.RemoveFailure(error, uuid)))
    );
  }

  /**
   * Action success for removing a post.
   */
  @Action(PostActions.RemoveSuccess)
  removeSuccess(ctx: StateContext<PostStateModel>, { uuid }: PostActions.RemoveSuccess) {
    const state = ctx.getState();

    const entities = { ...state.entities };
    delete entities[uuid];

    ctx.setState({
      ...state,
      ids: state.ids.filter((id) => id !== uuid),
      entities,
    });
  }

  /**
   * Action for removing all posts.
   */
  @Action(PostActions.Clear)
  clear(ctx: StateContext<PostStateModel>) {
    return this.postApiService.clear().pipe(
      tap(() => ctx.dispatch(new PostActions.ClearSuccess())),
      catchError((error: unknown) => ctx.dispatch(new PostActions.ClearFailure(error)))
    );
  }

  /**
   * Action success for removing all posts.
   */
  @Action(PostActions.ClearSuccess)
  clearSuccess(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: [],
      entities: {},
    });
  }
}
