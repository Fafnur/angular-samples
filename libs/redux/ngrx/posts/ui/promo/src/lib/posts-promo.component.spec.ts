import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

import { CarouselModule } from '@angular-samples/ui/carousel';

import { PostsPromoComponent } from './posts-promo.component';

describe('PostsPromoComponent', () => {
  let component: PostsPromoComponent;
  let fixture: ComponentFixture<PostsPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NoopAnimationsModule, MockModule(CarouselModule)],
      declarations: [PostsPromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsPromoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
