import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostStateModule } from '@angular-samples/redux/ngrx/posts/state';
import { PostsLastModule } from '@angular-samples/redux/ngrx/posts/ui/last';
import { PostsPopularModule } from '@angular-samples/redux/ngrx/posts/ui/popular';
import { PostsPromoModule } from '@angular-samples/redux/ngrx/posts/ui/promo';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [CommonModule, PageRoutingModule, PostStateModule, PostsLastModule, PostsPopularModule, PostsPromoModule],
  declarations: [PageComponent],
})
export class PageModule {}
