import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconsPageComponent } from './icons-page.component';
import { IconsPageRoutingModule } from './icons-page.routing.module';

@NgModule({
  imports: [CommonModule, IconsPageRoutingModule],
  declarations: [IconsPageComponent],
  exports: [IconsPageComponent],
})
export class IconsPageModule {}
