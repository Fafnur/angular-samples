import { NgModule } from '@angular/core';

import { PostApiModule } from '@angular-samples/redux/posts/api';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import { NativePostFacade } from './post.facade';

@NgModule({
  imports: [PostApiModule],
  providers: [
    {
      provide: PostFacade,
      useClass: NativePostFacade,
    },
  ],
})
export class PostsStateModule {
  // TODO: Dirty fix for emulate OnInitEffects
  constructor(postFacade: PostFacade) {
    postFacade.load();
  }
}
