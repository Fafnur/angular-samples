import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@angular-samples/redux/home/page').then((modules) => modules.PageModule),
  },
  {
    path: 'ngrx',
    loadChildren: () => import('@angular-samples/redux/ngrx/posts/page').then((modules) => modules.PageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
