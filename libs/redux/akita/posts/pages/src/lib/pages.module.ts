import { NgModule } from '@angular/core';

import { PostsStateModule } from '@angular-samples/redux/akita/posts/state';

import { PagesRoutingModule } from './pages-routing.module';

/**
 * Pages for Akita application
 */
@NgModule({
  imports: [PagesRoutingModule, PostsStateModule],
})
export class PagesModule {}
