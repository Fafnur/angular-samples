import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { PostCreateDialogComponent } from './post-create-dialog.component';

/**
 * Post create dialog module
 */
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule],
  declarations: [PostCreateDialogComponent],
  exports: [PostCreateDialogComponent],
})
export class PostCreateDialogModule {}
