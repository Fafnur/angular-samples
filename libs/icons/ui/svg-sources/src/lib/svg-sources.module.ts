import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SvgSourcesComponent } from './svg-sources.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [SvgSourcesComponent],
  exports: [SvgSourcesComponent],
})
export class SvgSourcesModule {}
