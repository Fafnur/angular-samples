import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostArticleModule } from '@angular-samples/redux/ngrx/posts/view/ui/article';
import { PostsPopularModule } from '@angular-samples/redux/posts/ui/popular';
import { HeaderModule } from '@angular-samples/redux/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module.ts';

@NgModule({
  imports: [CommonModule, PageRoutingModule, HeaderModule, ContainerModule, GridModule, PostsPopularModule, PostArticleModule],
  declarations: [PageComponent],
})
export class PageModule {}
