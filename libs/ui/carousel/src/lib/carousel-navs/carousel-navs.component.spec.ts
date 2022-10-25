import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselNavsComponent } from './carousel-navs.component';
import { CarouselNavsComponentPo } from './carousel-navs.component.po';

@Component({
  template: `<angular-samples-carousel-navs automation-id="carousel-navs"></angular-samples-carousel-navs>`,
})
class WrapperComponent {}

describe('CarouselNavsComponent', () => {
  let po: CarouselNavsComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [MatButtonModule, MatIconModule],
      declarations: [CarouselNavsComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    po = new CarouselNavsComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show navs actions', () => {
    fixture.detectChanges();

    expect(po.carouselNavsPrevText).toBe('navigate_before');
    expect(po.carouselNavsNextText).toBe('navigate_next');
  });

  it('should call next after click next', () => {
    const next = jest.spyOn(po.carouselNavs?.componentInstance.next, 'emit');

    fixture.detectChanges();
    po.triggerCarouselNavsNextClick();

    expect(next).toBeCalled();
  });

  it('should call prev after click prev', () => {
    const next = jest.spyOn(po.carouselNavs?.componentInstance.prev, 'emit');

    fixture.detectChanges();
    po.triggerCarouselNavsPrevClick();

    expect(next).toBeCalled();
  });
});
