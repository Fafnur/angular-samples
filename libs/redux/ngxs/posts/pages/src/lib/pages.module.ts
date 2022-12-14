import { NgModule } from '@angular/core';

import { PostsStateModule } from '@angular-samples/redux/ngxs/posts/state';

import { PagesRoutingModule } from './pages-routing.module';

/**
 * Pages for Ngxs application
 */
@NgModule({
  imports: [PostsStateModule, PagesRoutingModule],
})
export class PagesModule {}
