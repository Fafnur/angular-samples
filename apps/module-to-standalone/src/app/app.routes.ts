import { Route } from '@angular/router';

import { HeaderComponent } from '@angular-samples/module-to-standalone/ui/header';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header',
  },
  {
    path: '',
    loadComponent: () => import('@angular-samples/module-to-standalone/home/page').then((modules) => modules.HomePageComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('@angular-samples/module-to-standalone/about/page').then((modules) => modules.AboutPageComponent),
  },
  {
    path: 'contacts',
    loadChildren: () => import('@angular-samples/module-to-standalone/contacts/page').then((modules) => modules.ContactPageModule),
  },
];
