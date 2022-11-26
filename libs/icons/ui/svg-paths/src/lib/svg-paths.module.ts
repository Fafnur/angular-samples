import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { SvgPathsComponent } from './svg-paths.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [SvgPathsComponent],
  exports: [SvgPathsComponent],
})
export class SvgPathsModule {}
