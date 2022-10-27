import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostArticleComponent } from './post-article.component';
import { PostArticleComponentPo } from './post-article.component.po';

describe('PostArticleComponent', () => {
  let po: PostArticleComponentPo;
  let fixture: ComponentFixture<PostArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [PostArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostArticleComponent);
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
  });
});
