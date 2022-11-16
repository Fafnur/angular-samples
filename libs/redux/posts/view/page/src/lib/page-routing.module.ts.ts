import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';

/**
 * Post view page
 */
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
];

/**
 * Post view page for all redux application
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
