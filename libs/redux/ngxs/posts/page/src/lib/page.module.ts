import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsStateModule } from '@angular-samples/redux/ngxs/posts/state';
import { HeaderModule } from '@angular-samples/redux/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [CommonModule, PageRoutingModule, PostsStateModule, GridModule, ContainerModule, HeaderModule],
  declarations: [PageComponent],
})
export class PageModule {}
