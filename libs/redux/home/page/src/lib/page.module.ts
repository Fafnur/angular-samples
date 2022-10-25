import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@angular-samples/ui/container';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [CommonModule, PageRoutingModule, ContainerModule],
  declarations: [PageComponent],
})
export class PageModule {}
