import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { PostBodyPipe } from './post-body.pipe';

describe('PostBodyPipe', () => {
  let pipe: PostBodyPipe;

  beforeAll(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    pipe = new PostBodyPipe(TestBed.inject(DomSanitizer));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    expect(pipe.transform({ body: 'a\nb' } as never)).toBe('a<br>b');
  });
});
