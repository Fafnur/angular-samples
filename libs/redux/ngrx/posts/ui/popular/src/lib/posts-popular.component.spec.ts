import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPopularComponent } from './posts-popular.component';

describe('PostsPopularComponent', () => {
  let component: PostsPopularComponent;
  let fixture: ComponentFixture<PostsPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsPopularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
