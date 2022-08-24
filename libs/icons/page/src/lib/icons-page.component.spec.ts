import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IconsPageComponent } from './icons-page.component';

describe('IconsPageComponent', () => {
  let component: IconsPageComponent;
  let fixture: ComponentFixture<IconsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [IconsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
