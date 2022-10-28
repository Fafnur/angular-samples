import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from '@angular-samples/redux/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [CommonModule, PageRoutingModule, GridModule, ContainerModule, HeaderModule],
  declarations: [PageComponent],
})
export class PageModule {}
