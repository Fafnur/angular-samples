import { NgModule } from '@angular/core';

import { PostStateModule } from '@angular-samples/redux/ngrx/posts/state';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [PostStateModule, PagesRoutingModule],
})
export class PagesModule {}
