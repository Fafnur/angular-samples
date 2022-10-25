import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostPromoModule } from './post-promo/post-promo.module';
import { PostsPromoComponent } from './posts-promo.component';

@NgModule({
  imports: [CommonModule, PostPromoModule],
  declarations: [PostsPromoComponent],
  exports: [PostsPromoComponent],
})
export class PostsPromoModule {}
