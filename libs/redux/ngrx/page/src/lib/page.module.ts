import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  imports: [CommonModule, PageRoutingModule],
  declarations: [PageComponent],
})
export class PageModule {}
