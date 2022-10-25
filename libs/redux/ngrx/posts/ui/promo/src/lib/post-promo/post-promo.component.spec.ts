import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPromoComponent } from './post-promo.component';

describe('PostPromoComponent', () => {
  let component: PostPromoComponent;
  let fixture: ComponentFixture<PostPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
