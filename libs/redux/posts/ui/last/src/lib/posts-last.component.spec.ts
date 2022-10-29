import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { ReplaySubject } from 'rxjs';
import { mock, when } from 'ts-mockito';

import { providerOf } from '@angular-samples/core/testing';
import { Post, POSTS_STUB } from '@angular-samples/redux/posts/common';
import { PostFacade, PostFacadeStub } from '@angular-samples/redux/posts/facade';
import { GridModule } from '@angular-samples/ui/grid';

import { PostLastModule } from './post-last/post-last.module';
import { PostsLastComponent } from './posts-last.component';
import { PostsLastComponentPo } from './posts-last.component.po';

describe('PostsLastComponent', () => {
  let po: PostsLastComponentPo;
  let fixture: ComponentFixture<PostsLastComponent>;
  let postFacadeMock: PostFacade;
  let postsLast$: ReplaySubject<Post[]>;

  beforeEach(async () => {
    postFacadeMock = mock(PostFacadeStub);

    postsLast$ = new ReplaySubject<Post[]>(1);

    when(postFacadeMock.postsLast$).thenReturn(postsLast$);

    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(PostLastModule), MockModule(GridModule)],
      declarations: [PostsLastComponent],
      providers: [providerOf(PostFacade, postFacadeMock)],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsLastComponent);
    po = new PostsLastComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    postsLast$.next(POSTS_STUB);
    fixture.detectChanges();

    expect(po.row).toBeTruthy();
    expect(po.columns.length).toBe(POSTS_STUB.length);
    expect(po.posts.length).toBe(POSTS_STUB.length);
  });
});
