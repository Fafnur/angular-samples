import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageComponent } from './page.component';

describe('HomePageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [PageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
