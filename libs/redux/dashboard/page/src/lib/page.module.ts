import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from '@angular-samples/redux/dashboard/ui/card';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [CommonModule, PageRoutingModule, ContainerModule, GridModule, CardModule],
  declarations: [PageComponent],
})
export class PageModule {}
