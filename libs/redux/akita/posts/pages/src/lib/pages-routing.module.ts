import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Routes for Akita application
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@angular-samples/redux/posts/page').then((modules) => modules.PageModule),
  },
  {
    path: 'post/:uuid',
    loadChildren: () => import('@angular-samples/redux/posts/view/page').then((modules) => modules.PageModule),
  },
];

/**
 * Router module for Akita application
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
