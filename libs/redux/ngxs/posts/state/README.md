# redux-ngxs-posts-state

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test redux-ngxs-posts-state` to execute the unit tests.

import { Injectable } from '@angular/core';
import { createEntityCollections, EntityCollections } from '@angular-ru/cdk/entity';
import { DataAction, Payload, StateRepository } from '@angular-ru/ngxs/decorators';
import { NgxsDataEntityCollectionsRepository } from '@angular-ru/ngxs/repositories';
import { NgxsOnInit, State } from '@ngxs/store';

import { PostApiService } from '@angular-samples/redux/posts/api';
import { Post } from '@angular-samples/redux/posts/common';

interface PostStateOptions {
loaded: boolean;
}

export type PostState = EntityCollections<Post, string, PostStateOptions>;

export const initialPostState: PostState = {
...createEntityCollections(),
loaded: false,
};

@StateRepository()
@State<PostState>({
name: 'posts',
defaults: initialPostState,
})
@Injectable()
export class PostStateRepository extends NgxsDataEntityCollectionsRepository<Post, string, PostStateOptions> implements NgxsOnInit {
constructor(private readonly postApiService: PostApiService) {
super();
}

override selectId(entity: Post): string {
return entity.uuid;
}

@DataAction()
setLoaded(@Payload('loaded') loaded: boolean): void {
const state = this.getState();
this.setEntitiesState({
...state,
loaded,
});
}

override ngxsOnInit(): void {}
}
