import { NgModule } from '@angular/core';

import { PostsStateModule } from '@angular-samples/redux/native/posts/state';

import { PagesRoutingModule } from './pages-routing.module';

/**
 * Pages for Native Angular
 */
@NgModule({
  imports: [PagesRoutingModule, PostsStateModule],
})
export class PagesModule {}
