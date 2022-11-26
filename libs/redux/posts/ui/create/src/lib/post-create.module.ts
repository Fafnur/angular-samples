import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { PostCreateComponent } from './post-create.component';
import { PostCreateDialogModule } from './post-create-dialog/post-create-dialog.module';

/**
 * Post create module
 */
@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule, PostCreateDialogModule],
  declarations: [PostCreateComponent],
  exports: [PostCreateComponent],
})
export class PostCreateModule {}
