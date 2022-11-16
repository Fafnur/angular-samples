import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';

/**
 * Posts page
 */
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
];

/**
 * Post page for all redux application
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
