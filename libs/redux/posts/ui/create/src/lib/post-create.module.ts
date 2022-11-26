import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

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
