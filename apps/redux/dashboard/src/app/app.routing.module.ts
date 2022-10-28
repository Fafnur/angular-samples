import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@angular-samples/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@angular-samples/redux/home/page').then((modules) => modules.PageModule),
      },
      {
        path: 'akita',
        loadChildren: () => import('redux-akita/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'ngxs',
        loadChildren: () => import('redux-ngxs/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'ngrx',
        loadChildren: () => import('redux-ngrx/Module').then((m) => m.RemoteEntryModule),
      },
    ],
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
