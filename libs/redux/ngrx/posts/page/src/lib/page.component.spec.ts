import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PostsLastModule } from '@angular-samples/redux/posts/ui/last';
import { PostsPopularModule } from '@angular-samples/redux/posts/ui/popular';
import { PostsPromoModule } from '@angular-samples/redux/posts/ui/promo';
import { HeaderModule } from '@angular-samples/redux/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageComponentPo } from './page.component.po';

describe('PostsPageComponent', () => {
  let po: PageComponentPo;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(PostsLastModule),
        MockModule(PostsPopularModule),
        MockModule(PostsPromoModule),
        MockModule(GridModule),
        MockModule(ContainerModule),
        MockModule(HeaderModule),
      ],
      declarations: [PageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponent);
    po = new PageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(po.container).toBeTruthy();
    expect(po.promo).toBeTruthy();
    expect(po.last).toBeTruthy();
    expect(po.popular).toBeTruthy();
  });
});
