import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs';

import { PostApiService } from '@angular-samples/redux/posts/api';
import { Post } from '@angular-samples/redux/posts/common';

import * as PostActions from './post.actions';

export interface PostStateModel {
  loaded: boolean;
  ids: string[];
  entities: Record<string, Post>;
}

export const initialPostState: PostStateModel = {
  ids: [],
  entities: {},
  loaded: false,
};

@State<PostStateModel>({
  name: 'posts',
  defaults: initialPostState,
})
@Injectable()
export class PostState {
  @Selector()
  static loaded(state: PostStateModel): boolean {
    return state.loaded;
  }

  @Selector()
  static posts(state: PostStateModel): Post[] {
    return Object.values(state.entities);
  }

  @Selector()
  static postsPromo(state: PostStateModel): Post[] {
    return Object.values(state.entities)
      .filter((post) => post.promo)
      .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  }

  @Selector()
  static postsLast(state: PostStateModel): Post[] {
    return Object.values(state.entities)
      .filter((post) => !post.promo)
      .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  }

  @Selector()
  static postsPopular(state: PostStateModel): Post[] {
    return Object.values(state.entities)
      .filter((post) => !post.promo)
      .sort((a, b) => b.views - a.views);
  }

  static post(uuid: string): (state: PostStateModel) => Post | null {
    return createSelector([PostState], (state: PostStateModel) => {
      return state.entities[uuid] ?? null;
    });
  }

  constructor(private readonly postApiService: PostApiService) {}

  @Action(PostActions.Load)
  load(ctx: StateContext<PostStateModel>) {
    return this.postApiService.get().pipe(
      tap((posts) => ctx.dispatch(new PostActions.LoadSuccess(posts))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.LoadFailure(error)))
    );
  }

  @Action(PostActions.LoadSuccess)
  loadSuccess(ctx: StateContext<PostStateModel>, { posts }: PostActions.LoadSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: posts.map((post) => post.uuid),
      entities: posts.reduce((acc, current) => ({ ...acc, [current.uuid]: current }), {}),
    });
  }

  @Action(PostActions.LoadOne)
  loadOne(ctx: StateContext<PostStateModel>, { uuid }: PostActions.LoadOne) {
    return this.postApiService.getOne(uuid).pipe(
      tap((post) => ctx.dispatch(new PostActions.LoadOneSuccess(post))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.LoadOneFailure(error, uuid)))
    );
  }

  @Action(PostActions.LoadOneSuccess)
  loadOneSuccess(ctx: StateContext<PostStateModel>, { post }: PostActions.LoadOneSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: post && !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
      entities: post ? { ...state.entities, [post.uuid]: post } : state.entities,
    });
  }

  @Action(PostActions.Create)
  create(ctx: StateContext<PostStateModel>, { postCreate }: PostActions.Create) {
    return this.postApiService.create(postCreate).pipe(
      tap((post) => ctx.dispatch(new PostActions.CreateSuccess(post))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.CreateFailure(error)))
    );
  }

  @Action(PostActions.CreateSuccess)
  createSuccess(ctx: StateContext<PostStateModel>, { post }: PostActions.CreateSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
      entities: { ...state.entities, [post.uuid]: post },
    });
  }

  @Action(PostActions.Change)
  change(ctx: StateContext<PostStateModel>, { postChange }: PostActions.Change) {
    return this.postApiService.change(postChange).pipe(
      tap((post) => ctx.dispatch(new PostActions.ChangeSuccess(post))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.ChangeFailure(error, postChange.uuid)))
    );
  }

  @Action(PostActions.ChangeSuccess)
  changeSuccess(ctx: StateContext<PostStateModel>, { post }: PostActions.ChangeSuccess) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      ids: !state.ids.includes(post.uuid) ? [...state.ids, post.uuid] : state.ids,
      entities: { ...state.entities, [post.uuid]: post },
    });
  }

  @Action(PostActions.Remove)
  remove(ctx: StateContext<PostStateModel>, { uuid }: PostActions.Remove) {
    return this.postApiService.remove(uuid).pipe(
      tap(() => ctx.dispatch(new PostActions.RemoveSuccess(uuid))),
      catchError((error: unknown) => ctx.dispatch(new PostActions.RemoveFailure(error, uuid)))
    );
  }

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

  @Action(PostActions.Clear)
  clear(ctx: StateContext<PostStateModel>) {
    return this.postApiService.clear().pipe(
      tap(() => ctx.dispatch(new PostActions.ClearSuccess())),
      catchError((error: unknown) => ctx.dispatch(new PostActions.ClearFailure(error)))
    );
  }

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
