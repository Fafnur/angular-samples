import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSourcesComponent } from './svg-sources.component';

describe('SvgSourcesComponent', () => {
  let component: SvgSourcesComponent;
  let fixture: ComponentFixture<SvgSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgSourcesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
