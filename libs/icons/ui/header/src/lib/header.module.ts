import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '@angular-samples/icons/ui/container';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, RouterModule, ContainerModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
