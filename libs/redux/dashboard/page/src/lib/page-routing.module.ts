import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';

/**
 * Dashboard page
 */
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
];

/**
 * Pages for dashboard application
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
