import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card.component';

/**
 * Redux card module
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
