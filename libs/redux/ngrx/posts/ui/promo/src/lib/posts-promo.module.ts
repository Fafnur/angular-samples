import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsPromoComponent } from './posts-promo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostsPromoComponent],
  exports: [PostsPromoComponent],
})
export class PostsPromoModule {}
