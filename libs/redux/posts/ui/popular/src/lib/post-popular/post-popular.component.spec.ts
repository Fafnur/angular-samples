import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { POST_STUB } from '@angular-samples/redux/posts/common';

import { PostPopularComponent } from './post-popular.component';
import { PostPopularComponentPo } from './post-popular.component.po';

@Component({
  template: `<angular-samples-post-popular [post]="post"></angular-samples-post-popular>`,
})
class WrapperComponent {
  post = POST_STUB;
}

describe('PostPopularComponent', () => {
  let po: PostPopularComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [PostPopularComponent, WrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    po = new PostPopularComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(po.link).toBeTruthy();
    expect(po.image).toBeTruthy();
    expect(po.title).toBeTruthy();
  });
});
