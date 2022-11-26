import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { CarouselNavsComponent } from './carousel-navs.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [CarouselNavsComponent],
  exports: [CarouselNavsComponent],
})
export class CarouselNavsModule {}
