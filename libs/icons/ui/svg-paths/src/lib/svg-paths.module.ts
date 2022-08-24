import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgPathsComponent } from './svg-paths.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgPathsComponent],
  exports: [SvgPathsComponent],
})
export class SvgPathsModule {}
