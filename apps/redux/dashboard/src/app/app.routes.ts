import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'redux-akita',
    loadChildren: () => import('redux-akita/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'redux-ngxs',
    loadChildren: () => import('redux-ngxs/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'redux-ngrx',
    loadChildren: () => import('redux-ngrx/Module').then((m) => m.RemoteEntryModule),
  },
];
