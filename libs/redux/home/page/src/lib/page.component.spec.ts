import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { CardModule } from '@angular-samples/redux/home/ui/card';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageComponentPo } from './page.component.po';

describe('PageComponent', () => {
  let po: PageComponentPo;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(ContainerModule), MockModule(GridModule), MockModule(CardModule)],
      declarations: [PageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponent);
    po = new PageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.container).toBeTruthy();
    expect(po.title).toBeTruthy();
    expect(po.description).toBeTruthy();
    expect(po.ngrx).toBeTruthy();
    expect(po.ngxs).toBeTruthy();
    expect(po.akita).toBeTruthy();
  });
});
