import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { HomePageService } from './home-page.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
  ],
  declarations: [HomePageComponent],
  providers: [HomePageService],
})
export class HomePageModule {}
