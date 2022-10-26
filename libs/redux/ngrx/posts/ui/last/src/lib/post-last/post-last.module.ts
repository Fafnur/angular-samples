import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostLastComponent } from './post-last.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PostLastComponent],
  exports: [PostLastComponent],
})
export class PostLastModule {}
