import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@angular-samples/module-to-standalone/home/page').then((modules) => modules.HomePageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('@angular-samples/module-to-standalone/about/page').then((modules) => modules.AboutPageModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('@angular-samples/module-to-standalone/contacts/page').then((modules) => modules.ContactPageModule),
  },
];
