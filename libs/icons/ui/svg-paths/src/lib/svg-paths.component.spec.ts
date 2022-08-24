import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPathsComponent } from './svg-paths.component';

describe('SvgPathsComponent', () => {
  let component: SvgPathsComponent;
  let fixture: ComponentFixture<SvgPathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPathsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
