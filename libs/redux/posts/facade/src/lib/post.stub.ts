import { Injectable } from '@angular/core';

import { PostChange, PostCreate } from '@angular-samples/redux/posts/common';

import { PostFacade } from './post.facade';

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
/**
 * Stub for PostFacade
 */
@Injectable()
export class PostFacadeStub extends PostFacade {
  change(postChange: PostChange): void {}

  clear(): void {}

  create(postCreate: PostCreate): void {}

  load(): void {}

  remove(uuid: string): void {}
}
/* eslint-enable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
