import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLastComponent } from './posts-last.component';

describe('PostsLastComponent', () => {
  let component: PostsLastComponent;
  let fixture: ComponentFixture<PostsLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsLastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
