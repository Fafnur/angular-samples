import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from '@angular-samples/icons/ui/header';
import { PostsPopularModule } from '@angular-samples/redux/ngrx/posts/ui/popular';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module.ts';

@NgModule({
  imports: [CommonModule, PageRoutingModule, HeaderModule, ContainerModule, GridModule, PostsPopularModule],
  declarations: [PageComponent],
})
export class PageModule {}
