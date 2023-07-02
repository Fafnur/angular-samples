import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@angular-samples/module-to-standalone/home/page').then((modules) => modules.HomePageModule),
  },
];
