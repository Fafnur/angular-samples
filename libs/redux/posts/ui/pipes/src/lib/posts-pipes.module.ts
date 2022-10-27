import { NgModule } from '@angular/core';

import { PostBodyPipe } from './post-body.pipe';

const pipes = [PostBodyPipe];

@NgModule({
  declarations: pipes,
  exports: pipes,
})
export class PostsPipesModule {}
