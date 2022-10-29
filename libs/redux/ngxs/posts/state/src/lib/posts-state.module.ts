import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { PostApiModule } from '@angular-samples/redux/posts/api';

import { PostFacade } from './post.facade';
import { PostState } from './post.state';

@NgModule({
  imports: [PostApiModule, NgxsModule.forFeature([PostState])],
  providers: [PostFacade],
})
export class PostsStateModule {}
