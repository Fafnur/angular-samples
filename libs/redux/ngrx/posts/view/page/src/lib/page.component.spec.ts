import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';
import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { PostsPopularModule } from '@angular-samples/redux/ngrx/posts/ui/popular';
import { PostArticleModule } from '@angular-samples/redux/ngrx/posts/view/ui/article';
import { HeaderModule } from '@angular-samples/redux/ngrx/ui/header';
import { Post, POST_STUB } from '@angular-samples/redux/posts/common';
import { ContainerModule } from '@angular-samples/ui/container';
import { GridModule } from '@angular-samples/ui/grid';

import { PageComponent } from './page.component';
import { PageComponentPo } from './page.component.po';

describe('PageComponent', () => {
  let po: PageComponentPo;
  let fixture: ComponentFixture<PageComponent>;
  let activatedRouteMock: ActivatedRoute;
  let postFacadeMock: PostFacade;
  let post$: ReplaySubject<Post>;
  let params$: BehaviorSubject<{ uuid: string }>;

  beforeEach(async () => {
    activatedRouteMock = mock(ActivatedRoute);
    postFacadeMock = mock(PostFacade);

    post$ = new ReplaySubject<Post>(1);
    params$ = new BehaviorSubject<{ uuid: string }>({ uuid: POST_STUB.uuid });

    when(postFacadeMock.post$(POST_STUB.uuid)).thenReturn(post$);
    when(activatedRouteMock.params).thenReturn(params$);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(HeaderModule),
        MockModule(ContainerModule),
        MockModule(GridModule),
        MockModule(PostsPopularModule),
        MockModule(PostArticleModule),
      ],
      declarations: [PageComponent],
      providers: [providerOf(PostFacade, postFacadeMock), providerOf(ActivatedRoute, activatedRouteMock)],
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
    expect(po.header).toBeTruthy();
    expect(po.article).toBeTruthy();
    expect(po.popular).toBeTruthy();
  });
});
