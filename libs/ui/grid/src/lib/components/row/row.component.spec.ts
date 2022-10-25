import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RowComponent } from './row.component';
import { RowComponentPo } from './row.component.po';

@Component({
  template: `<angular-samples-row automation-id="row"></angular-samples-row>`,
})
class WrapperComponent {}

describe('RowComponent', () => {
  let pageObject: RowComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [RowComponent, WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    pageObject = new RowComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.row).toBeTruthy();
  });
});
