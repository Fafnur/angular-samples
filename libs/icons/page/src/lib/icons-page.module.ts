import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '@angular-samples/icons/ui/container';
import { HeaderModule } from '@angular-samples/icons/ui/header';
import { SvgPathsModule } from '@angular-samples/icons/ui/svg-paths';
import { SvgSourcesModule } from '@angular-samples/icons/ui/svg-sources';

import { IconsPageComponent } from './icons-page.component';
import { IconsPageRoutingModule } from './icons-page.routing.module';

@NgModule({
  imports: [CommonModule, IconsPageRoutingModule, SvgPathsModule, SvgSourcesModule, HeaderModule, ContainerModule],
  declarations: [IconsPageComponent],
  exports: [IconsPageComponent],
})
export class IconsPageModule {}
