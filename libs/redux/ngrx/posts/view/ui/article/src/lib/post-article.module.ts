import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostArticleComponent } from './post-article.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PostArticleComponent],
  exports: [PostArticleComponent],
})
export class PostArticleModule {}
