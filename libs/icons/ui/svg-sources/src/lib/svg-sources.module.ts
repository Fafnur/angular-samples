import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgSourcesComponent } from './svg-sources.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgSourcesComponent],
  exports: [SvgSourcesComponent],
})
export class SvgSourcesModule {}
