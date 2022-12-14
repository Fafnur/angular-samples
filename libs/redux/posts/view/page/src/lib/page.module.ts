import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from '@angular-samples/redux/posts/ui/header';
import { PostsPopularModule } from '@angular-samples/redux/posts/ui/popular';
import { PostArticleModule } from '@angular-samples/redux/posts/view/ui/article';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module.ts';

/**
 * Post view page module
 */
@NgModule({
  imports: [CommonModule, PageRoutingModule, HeaderModule, ContainerModule, GridModule, PostsPopularModule, PostArticleModule],
  declarations: [PageComponent],
})
export class PageModule {}
