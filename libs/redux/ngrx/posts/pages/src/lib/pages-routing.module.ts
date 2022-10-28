import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@angular-samples/redux/ngrx/posts/page').then((modules) => modules.PageModule),
  },
  {
    path: 'post/:uuid',
    loadChildren: () => import('@angular-samples/redux/ngrx/posts/view/page').then((modules) => modules.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
