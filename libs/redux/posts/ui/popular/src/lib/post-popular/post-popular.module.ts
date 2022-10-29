import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostPopularComponent } from './post-popular.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PostPopularComponent],
  exports: [PostPopularComponent],
})
export class PostPopularModule {}
