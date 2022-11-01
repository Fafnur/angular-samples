import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

import { PostChange, PostCreate } from '@angular-samples/redux/posts/common';

import { PostFacade } from './post.facade';

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
/**
 * Stub for PostFacade
 */
@Injectable()
export class PostFacadeStub extends PostFacade {
  override post$ = (uuid: string) => EMPTY;

  change(postChange: PostChange): void {}

  clear(): void {}

  create(postCreate: PostCreate): void {}

  load(): void {}

  loadOne(uuid: string): void {}

  remove(uuid: string): void {}
}
/* eslint-enable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
