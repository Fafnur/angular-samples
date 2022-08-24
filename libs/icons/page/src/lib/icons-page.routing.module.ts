import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SvgPathsComponent } from '@angular-samples/icons/ui/svg-paths';
import { SvgSourcesComponent } from '@angular-samples/icons/ui/svg-sources';

import { IconsPageComponent } from './icons-page.component';

const routes = [
  {
    path: '',
    component: IconsPageComponent,
    children: [
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
