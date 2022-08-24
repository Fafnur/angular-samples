import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { mock } from 'ts-mockito';

import { IconService } from '@angular-samples/core/icons';
import { providerOf } from '@angular-samples/core/testing';

import { SvgPathsComponent } from './svg-paths.component';
import { SvgPathsComponentPo } from './svg-paths.component.po';

describe('SvgPathsComponent', () => {
  let po: SvgPathsComponentPo;
  let fixture: ComponentFixture<SvgPathsComponent>;
  let iconServiceMock: IconService;

  beforeEach(async () => {
    iconServiceMock = mock(IconService);

    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(MatIconModule), MockModule(MatButtonModule)],
      declarations: [SvgPathsComponent],
      providers: [providerOf(IconService, iconServiceMock)],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgPathsComponent);
    po = new SvgPathsComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.nav).toBeTruthy();
    expect(po.facebook).toBeTruthy();
    expect(po.instagram).toBeTruthy();
    expect(po.telegram).toBeTruthy();
  });
});
