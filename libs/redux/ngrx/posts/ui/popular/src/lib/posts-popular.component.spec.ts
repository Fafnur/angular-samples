import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';
import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { Post, POSTS_STUB } from '@angular-samples/redux/posts/common';

import { PostPopularModule } from './post-popular/post-popular.module';
import { PostsPopularComponent } from './posts-popular.component';
import { PostsPopularComponentPo } from './posts-popular.component.po';

describe('PostsPopularComponent', () => {
  let po: PostsPopularComponentPo;
  let fixture: ComponentFixture<PostsPopularComponent>;
  let postFacadeMock: PostFacade;
  let postsPopular$: ReplaySubject<Post[]>;

  beforeEach(async () => {
    postFacadeMock = mock(PostFacade);

    postsPopular$ = new ReplaySubject<Post[]>(1);

    when(postFacadeMock.postsPopular$).thenReturn(postsPopular$);

    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(PostPopularModule)],
      declarations: [PostsPopularComponent],
      providers: [providerOf(PostFacade, postFacadeMock)],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsPopularComponent);
    po = new PostsPopularComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    postsPopular$.next(POSTS_STUB);
    fixture.detectChanges();

    expect(po.posts.length).toBe(POSTS_STUB.length);
  });
});
