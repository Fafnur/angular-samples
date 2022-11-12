import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsPipesModule } from '@angular-samples/redux/posts/ui/pipes';

import { PostArticleComponent } from './post-article.component';

/**
 * Post article module
 */
@NgModule({
  imports: [CommonModule, RouterModule, PostsPipesModule],
  declarations: [PostArticleComponent],
  exports: [PostArticleComponent],
})
export class PostArticleModule {}
