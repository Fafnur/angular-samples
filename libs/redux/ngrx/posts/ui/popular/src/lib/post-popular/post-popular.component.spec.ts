import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPopularComponent } from './post-popular.component';

describe('PostPopularComponent', () => {
  let component: PostPopularComponent;
  let fixture: ComponentFixture<PostPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPopularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
