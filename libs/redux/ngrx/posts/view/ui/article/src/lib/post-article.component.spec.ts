import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { POST_STUB } from '@angular-samples/redux/posts/common';
import { PostsPipesModule } from '@angular-samples/redux/posts/ui/pipes';

import { PostArticleComponent } from './post-article.component';
import { PostArticleComponentPo } from './post-article.component.po';

@Component({
  template: `<angular-samples-post-article [post]="post"></angular-samples-post-article>`,
})
class WrapperComponent {
  post = POST_STUB;
}

describe('PostArticleComponent', () => {
  let po: PostArticleComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, MockModule(PostsPipesModule)],
      declarations: [PostArticleComponent, WrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    po = new PostArticleComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.title).toBeTruthy();
    expect(po.body).toBeTruthy();
    expect(po.date).toBeTruthy();
    expect(po.image).toBeTruthy();
  });
});
