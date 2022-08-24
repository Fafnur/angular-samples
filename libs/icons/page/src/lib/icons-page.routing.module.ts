import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SvgPathsComponent } from '@angular-samples/icons/ui/svg-paths';
import { SvgSourcesComponent } from '@angular-samples/icons/ui/svg-sources';

import { IconsPageComponent } from './icons-page.component';

const routes: Routes = [
  {
    path: '',
    component: IconsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'sources',
        pathMatch: 'full',
      },
      {
        path: 'paths',
        component: SvgPathsComponent,
      },
      {
        path: 'sources',
        component: SvgSourcesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsPageRoutingModule {}
