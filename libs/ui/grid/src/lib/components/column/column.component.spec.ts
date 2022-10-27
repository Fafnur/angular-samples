import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColumnComponent } from './column.component';
import { ColumnComponentPo } from './column.component.po';

@Component({
  template: `<angular-samples-column automation-id="column"></angular-samples-column>`,
})
export class WrapperComponent {}

describe('ColumnComponent', () => {
  let pageObject: ColumnComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [ColumnComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new ColumnComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.column).toBeTruthy();
  });
});
