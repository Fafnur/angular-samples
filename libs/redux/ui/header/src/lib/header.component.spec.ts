import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock } from 'ts-mockito';

import { IconMaterialService } from '@angular-samples/core/icons';
import { providerOf } from '@angular-samples/core/testing';

import { HeaderComponent } from './header.component';
import { HeaderComponentPo } from './header.component.po';

describe('HeaderComponent', () => {
  let po: HeaderComponentPo;
  let fixture: ComponentFixture<HeaderComponent>;
  let iconServiceMock: IconMaterialService;

  beforeEach(async () => {
    iconServiceMock = mock(IconMaterialService);

    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, NoopAnimationsModule, MockModule(MatButtonModule), MockModule(MatIconModule)],
      declarations: [HeaderComponent],
      providers: [providerOf(IconMaterialService, iconServiceMock)],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    po = new HeaderComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.nav).toBeTruthy();
    expect(po.home).toBeTruthy();
    expect(po.ngrx).toBeTruthy();
    expect(po.ngxs).toBeTruthy();
    expect(po.akita).toBeTruthy();
  });
});
