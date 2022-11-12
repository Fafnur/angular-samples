import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridModule } from '@angular-samples/ui/grid';

import { PostLastModule } from './post-last/post-last.module';
import { PostsLastComponent } from './posts-last.component';

/**
 * Posts last widget
 */
@NgModule({
  imports: [CommonModule, PostLastModule, GridModule],
  declarations: [PostsLastComponent],
  exports: [PostsLastComponent],
})
export class PostsLastModule {}
