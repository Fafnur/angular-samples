import { NgModule } from '@angular/core';

import { PostFacade } from '@angular-samples/redux/posts/facade';

import { NativePostFacade } from './post.facade';

@NgModule({
  providers: [
    {
      provide: PostFacade,
      useClass: NativePostFacade,
    },
  ],
})
export class PostsStateModule {}
