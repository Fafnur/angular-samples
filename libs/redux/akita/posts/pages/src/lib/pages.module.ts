import { NgModule } from '@angular/core';

import { PostsStateModule } from '@angular-samples/redux/akita/posts/state';
import { PostFacade } from '@angular-samples/redux/posts/facade';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [PagesRoutingModule, PostsStateModule],
})
export class PagesModule {
  // TODO: Dirty fix for OnInitEffects
  constructor(postFacade: PostFacade) {
    postFacade.load();
  }
}
