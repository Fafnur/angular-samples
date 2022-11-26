import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { SvgSourcesComponent } from './svg-sources.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [SvgSourcesComponent],
  exports: [SvgSourcesComponent],
})
export class SvgSourcesModule {}
