import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { ContainerModule } from '@angular-samples/icons/ui/container';

import { HeaderComponent } from './header.component';
import { HeaderComponentPo } from './header.component.po';

describe('HeaderComponent', () => {
  let po: HeaderComponentPo;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(ContainerModule)],
      declarations: [HeaderComponent],
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
    expect(po.paths).toBeTruthy();
    expect(po.sources).toBeTruthy();
  });
});
