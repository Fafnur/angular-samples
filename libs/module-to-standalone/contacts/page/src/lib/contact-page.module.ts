import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactPageComponent } from './contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPageComponent,
      },
    ]),
  ],
  declarations: [ContactPageComponent],
})
export class ContactPageModule {}
