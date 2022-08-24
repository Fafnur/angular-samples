import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { HeaderModule } from '@angular-samples/icons/ui/header';
import { SvgPathsModule } from '@angular-samples/icons/ui/svg-paths';
import { SvgSourcesModule } from '@angular-samples/icons/ui/svg-sources';

import { IconsPageComponent } from './icons-page.component';

describe('IconsPageComponent', () => {
  let component: IconsPageComponent;
  let fixture: ComponentFixture<IconsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(SvgPathsModule), MockModule(SvgSourcesModule), MockModule(HeaderModule)],
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
