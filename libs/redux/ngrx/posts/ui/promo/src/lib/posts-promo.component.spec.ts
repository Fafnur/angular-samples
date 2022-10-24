import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPromoComponent } from './posts-promo.component';

describe('PostsPromoComponent', () => {
  let component: PostsPromoComponent;
  let fixture: ComponentFixture<PostsPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsPromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
