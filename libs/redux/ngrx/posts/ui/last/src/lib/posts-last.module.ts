import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostsLastComponent } from './posts-last.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostsLastComponent],
  exports: [PostsLastComponent],
})
export class PostsLastModule {}
