import { PageObject } from '@angular-samples/core/testing';

export class CarouselComponentPo extends PageObject {
  get carousel() {
    return this.getByAutomationId('carousel');
  }

  get carouselComponent() {
    return this.carousel?.componentInstance;
  }

  get carouselSlides() {
    return this.getAllByAutomationId('carousel-slide');
  }

  get carouselDots() {
    return this.getByAutomationId('carousel-dots');
  }

  get carouselNavs() {
    return this.getByAutomationId('carousel-navs');
  }

  get carouselActiveSlideIndex() {
    return this.carouselComponent?.active ?? null;
  }

  triggerCarouselSlideFirstClick(): void {
    this.triggerEventHandler(this.carouselSlides[0], 'clicked');
  }

  triggerCarouselDotsClick(eventObj: number): void {
    this.triggerEventHandler(this.carouselDots, 'selected', eventObj);
  }

  triggerCarouselNavsNextClick(): void {
    this.triggerEventHandler(this.carouselNavs, 'next');
  }

  triggerCarouselNavsPrevClick(): void {
    this.triggerEventHandler(this.carouselNavs, 'prev');
  }
}
