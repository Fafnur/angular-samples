import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { POST_STUB } from '@angular-samples/redux/posts/common';

import { PostLastComponent } from './post-last.component';
import { PostLastComponentPo } from './post-last.component.po';

@Component({
  template: `<angular-samples-post-last [post]="post"></angular-samples-post-last>`,
})
class WrapperComponent {
  post = POST_STUB;
}

describe('PostLastComponent', () => {
  let po: PostLastComponentPo;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [PostLastComponent, WrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    po = new PostLastComponentPo(fixture);
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
