import { NgModule } from '@angular/core';

import { PostBodyPipe } from './post-body.pipe';

const pipes = [PostBodyPipe];

/**
 * Posts pipes module
 */
@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class PostsPipesModule {}
