import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostPopularModule } from './post-popular/post-popular.module';
import { PostsPopularComponent } from './posts-popular.component';

/**
 * Posts popular widget
 */
@NgModule({
  imports: [CommonModule, PostPopularModule],
  declarations: [PostsPopularComponent],
  exports: [PostsPopularComponent],
})
export class PostsPopularModule {}
