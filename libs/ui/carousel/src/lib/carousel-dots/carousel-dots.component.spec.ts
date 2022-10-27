import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselDotsComponent } from './carousel-dots.component';
import { CarouselComponentPo } from './carousel-dots.component.po';

@Component({
  template: `<angular-samples-carousel-dots automation-id="carousel-dots" [counts]="counts"></angular-samples-carousel-dots>`,
})
class WrapperComponent {
  counts = 3;
}

describe('CarouselDotsComponent', () => {
  let po: CarouselComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [CarouselDotsComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    po = new CarouselComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set dots', () => {
    fixture.detectChanges();

    expect(po.carouselDotsItems.length).toBe(fixture.componentInstance.counts);
  });

  it('should call selected', () => {
    const selected = jest.spyOn(po.carouselDots?.componentInstance.selected, 'emit');

    fixture.detectChanges();

    po.triggerCarouselDotsFirstClick();

    expect(selected).toBeCalledWith(0);
  });
});
