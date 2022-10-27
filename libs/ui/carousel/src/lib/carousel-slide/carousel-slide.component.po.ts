import { PageObject } from '@angular-samples/core/testing';

export class CarouselSlideComponentPo extends PageObject {
  get carouselSlide() {
    return this.getByAutomationId('carousel-slide');
  }

  get carouselSlideImage() {
    return this.getByAutomationId('carousel-slide-image');
  }

  get carouselSlideImageStyles() {
    return this.carouselSlideImage?.styles['background-image'] ?? null;
  }
}
