import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Routes for Ngxs application
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
 * Router module for Ngxs application
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
