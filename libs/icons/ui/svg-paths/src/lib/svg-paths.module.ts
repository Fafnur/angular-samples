import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SvgPathsComponent } from './svg-paths.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [SvgPathsComponent],
  exports: [SvgPathsComponent],
})
export class SvgPathsModule {}
