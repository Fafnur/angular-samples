import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ContainerModule } from '@angular-samples/ui/container';

import { PageComponent } from './page.component';

const routes: Route[] = [
  {
    path: '',
    component: PageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ContainerModule],
  declarations: [PageComponent],
})
export class PageModule {}
