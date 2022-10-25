import { DebugElement } from '@angular/core';

import { PageObject } from '@angular-samples/core/testing';

export class CarouselComponentPo extends PageObject {
  get carouselDots(): DebugElement | null {
    return this.getByAutomationId('carousel-dots');
  }

  get carouselDotsItems(): DebugElement[] {
    return this.getAllByAutomationId('carousel-dots-item');
  }

  triggerCarouselDotsFirstClick(): void {
    this.triggerEventHandler(this.carouselDotsItems[0], 'click');
  }
}
