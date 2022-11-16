import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from '@angular-samples/ui/carousel';

import { PostsPromoComponent } from './posts-promo.component';

/**
 * Posts promo widget
 */
@NgModule({
  imports: [CommonModule, CarouselModule],
  declarations: [PostsPromoComponent],
  exports: [PostsPromoComponent],
})
export class PostsPromoModule {}
