import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@angular-samples/icons/ui/container';
import { HeaderModule } from '@angular-samples/icons/ui/header';
import { SvgPathsModule } from '@angular-samples/icons/ui/svg-paths';
import { SvgSourcesModule } from '@angular-samples/icons/ui/svg-sources';

import { IconsPageComponent } from './icons-page.component';
import { IconsPageComponentPo } from './icons-page.component.po';

describe('IconsPageComponent', () => {
  let po: IconsPageComponentPo;
  let fixture: ComponentFixture<IconsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(SvgPathsModule),
        MockModule(SvgSourcesModule),
        MockModule(HeaderModule),
        MockModule(ContainerModule),
      ],
      declarations: [IconsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconsPageComponent);
    po = new IconsPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.header).toBeTruthy();
    expect(po.container).toBeTruthy();
  });
});
