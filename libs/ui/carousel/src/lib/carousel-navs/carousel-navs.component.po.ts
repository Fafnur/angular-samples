import { PageObject } from '@angular-samples/core/testing';

export class CarouselNavsComponentPo extends PageObject {
  get carouselNavs() {
    return this.getByAutomationId('carousel-navs');
  }

  get carouselNavsPrev() {
    return this.getByAutomationId('carousel-navs-prev');
  }

  get carouselNavsPrevText() {
    return this.text('carousel-navs-prev');
  }

  get carouselNavsNext() {
    return this.getByAutomationId('carousel-navs-next');
  }

  get carouselNavsNextText() {
    return this.text('carousel-navs-next');
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavsPrev, 'click');
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavsNext, 'click');
  }
}
