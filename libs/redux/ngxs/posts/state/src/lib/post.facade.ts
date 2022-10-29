import { Injectable } from '@angular/core';
import { Actions, ofActionDispatched, Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';

import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import * as PostActions from './post.actions';
import { PostState } from './post.state';

@Injectable()
export class NgxsPostFacade implements PostFacade {
  @Select(PostState.loaded)
  loaded$!: Observable<boolean>;

  @Select(PostState.posts)
  posts$!: Observable<Post[]>;

  @Select(PostState.postsPromo)
  postsPromo$!: Observable<Post[]>;

  @Select(PostState.postsLast)
  postsLast$!: Observable<Post[]>;

  @Select(PostState.postsPopular)
  postsPopular$!: Observable<Post[]>;

  loadSuccess$ = this.actions.pipe(
    ofActionDispatched(PostActions.LoadSuccess),
    map(({ posts }) => posts)
  );

  loadFailure$ = this.actions.pipe(
    ofActionDispatched(PostActions.LoadFailure),
    map(({ error }) => error)
  );

  createSuccess$ = this.actions.pipe(
    ofActionDispatched(PostActions.CreateSuccess),
    map(({ post }) => post)
  );

  createFailure$ = this.actions.pipe(
    ofActionDispatched(PostActions.CreateFailure),
    map(({ error }) => error)
  );

  changeSuccess$ = this.actions.pipe(
    ofActionDispatched(PostActions.ChangeSuccess),
    map(({ post }) => post)
  );

  changeFailure$ = this.actions.pipe(
    ofActionDispatched(PostActions.ChangeFailure),
    map(({ error, uuid }) => ({ error, uuid }))
  );

  removeSuccess$ = this.actions.pipe(
    ofActionDispatched(PostActions.RemoveSuccess),
    map(({ uuid }) => uuid)
  );

  removeFailure$ = this.actions.pipe(
    ofActionDispatched(PostActions.RemoveFailure),
    map(({ error, uuid }) => ({ error, uuid }))
  );

  clearSuccess$: Observable<void> = this.actions.pipe(
    ofActionDispatched(PostActions.ClearSuccess),
    map(() => undefined)
  );

  clearFailure$ = this.actions.pipe(
    ofActionDispatched(PostActions.ClearFailure),
    map(({ error }) => error)
  );

  post$ = (uuid: string) => this.store.select(PostState.post(uuid));

  constructor(private readonly postState: PostState, private readonly store: Store, private actions: Actions) {}

  load() {
    return this.store.dispatch(new PostActions.Load());
  }

  create(postCreate: PostCreate) {
    return this.store.dispatch(new PostActions.Create(postCreate));
  }

  change(postChange: PostChange): void {
    this.store.dispatch(new PostActions.Change(postChange));
  }

  remove(uuid: string): void {
    this.store.dispatch(new PostActions.Remove(uuid));
  }

  clear(): void {
    this.store.dispatch(new PostActions.Clear());
  }
}
