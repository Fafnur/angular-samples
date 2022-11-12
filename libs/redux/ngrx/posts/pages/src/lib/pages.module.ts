import { NgModule } from '@angular/core';

import { PostsStateModule } from '@angular-samples/redux/ngrx/posts/state';

import { PagesRoutingModule } from './pages-routing.module';

/**
 * All post pages for Ngrx application
 */
@NgModule({
  imports: [PostsStateModule, PagesRoutingModule],
})
export class PagesModule {}
