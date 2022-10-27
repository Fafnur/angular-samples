import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { mock } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';
import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { PostsLastModule } from '@angular-samples/redux/ngrx/posts/ui/last';
import { PostsPopularModule } from '@angular-samples/redux/ngrx/posts/ui/popular';
import { PostsPromoModule } from '@angular-samples/redux/ngrx/posts/ui/promo';
import { HeaderModule } from '@angular-samples/redux/ngrx/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageComponentPo } from './page.component.po';

describe('PostsPageComponent', () => {
  let po: PageComponentPo;
  let fixture: ComponentFixture<PageComponent>;
  let postFacadeMock: PostFacade;

  beforeEach(async () => {
    postFacadeMock = mock(PostFacade);

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
      providers: [providerOf(PostFacade, postFacadeMock)],
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
    expect(po.title).toBeTruthy();
    expect(po.promo).toBeTruthy();
    expect(po.last).toBeTruthy();
    expect(po.popular).toBeTruthy();
  });
});
