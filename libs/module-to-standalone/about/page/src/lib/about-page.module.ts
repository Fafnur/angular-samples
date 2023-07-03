import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPageComponent,
      },
    ]),
  ],
  declarations: [AboutPageComponent],
})
export class AboutPageModule {}
