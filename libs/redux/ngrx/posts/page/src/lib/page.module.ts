import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsLastModule } from '@angular-samples/redux/ngrx/posts/ui/last';
import { PostsPopularModule } from '@angular-samples/redux/ngrx/posts/ui/popular';
import { PostsPromoModule } from '@angular-samples/redux/ngrx/posts/ui/promo';
import { HeaderModule } from '@angular-samples/redux/ngrx/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

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
  ],
  declarations: [PageComponent],
})
export class PageModule {}
