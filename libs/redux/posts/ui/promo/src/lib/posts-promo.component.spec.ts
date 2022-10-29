import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';
import { Post, POSTS_STUB } from '@angular-samples/redux/posts/common';
import { PostFacade, PostFacadeStub } from '@angular-samples/redux/posts/facade';
import { CarouselModule } from '@angular-samples/ui/carousel';

import { PostsPromoComponent } from './posts-promo.component';
import { PostsPromoComponentPo } from './posts-promo.component.po';

describe('PostsPromoComponent', () => {
  let po: PostsPromoComponentPo;
  let fixture: ComponentFixture<PostsPromoComponent>;
  let postFacadeMock: PostFacade;
  let postsPromo$: ReplaySubject<Post[]>;

  beforeEach(async () => {
    postFacadeMock = mock(PostFacadeStub);

    postsPromo$ = new ReplaySubject<Post[]>(1);

    when(postFacadeMock.postsPromo$).thenReturn(postsPromo$);

    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(CarouselModule)],
      declarations: [PostsPromoComponent],
      providers: [providerOf(PostFacade, postFacadeMock)],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsPromoComponent);
    po = new PostsPromoComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    postsPromo$.next(POSTS_STUB);
    fixture.detectChanges();

    expect(po.carousel).toBeTruthy();
  });
});
