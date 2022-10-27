import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PostCreateDialogComponent } from './post-create-dialog.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule],
  declarations: [PostCreateDialogComponent],
  exports: [PostCreateDialogComponent],
})
export class PostCreateDialogModule {}
