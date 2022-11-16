import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostCreateModule } from '@angular-samples/redux/posts/ui/create';
import { HeaderModule } from '@angular-samples/redux/posts/ui/header';
import { PostsLastModule } from '@angular-samples/redux/posts/ui/last';
import { PostsPopularModule } from '@angular-samples/redux/posts/ui/popular';
import { PostsPromoModule } from '@angular-samples/redux/posts/ui/promo';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

/**
 * Posts page module
 */
@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    PostsLastModule,
    PostsPopularModule,
    PostsPromoModule,
    GridModule,
    ContainerModule,
    HeaderModule,
    PostCreateModule,
  ],
  declarations: [PageComponent],
})
export class PageModule {}
