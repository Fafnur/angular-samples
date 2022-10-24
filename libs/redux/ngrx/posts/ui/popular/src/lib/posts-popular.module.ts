import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsPopularComponent } from './posts-popular.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostsPopularComponent],
  exports: [PostsPopularComponent],
})
export class PostsPopularModule {}
