import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAROUSEL_SLIDE_STUB } from '../carousel.stub';
import { CarouselSlideComponent } from './carousel-slide.component';
import { CarouselSlideComponentPo } from './carousel-slide.component.po';

@Component({
  template: `<angular-samples-carousel-slide automation-id="carousel-slide" [slide]="slide"></angular-samples-carousel-slide>`,
})
class WrapperComponent {
  slide = CAROUSEL_SLIDE_STUB;
}

describe('CarouselSlideComponent', () => {
  let po: CarouselSlideComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CarouselSlideComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    po = new CarouselSlideComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(po.carouselSlideImageStyles).toBe('url(/1.jpg)');
  });
});
