import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostCreateComponent } from './post-create.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostCreateComponent],
  exports: [PostCreateComponent],
})
export class PostCreateModule {}
