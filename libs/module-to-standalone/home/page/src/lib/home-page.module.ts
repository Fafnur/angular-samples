import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NxWelcomeComponent,
      },
    ]),
  ],
  declarations: [NxWelcomeComponent],
})
export class HomePageModule {}
