import { PageObject } from '@angular-samples/core/testing';

export class PostsPopularComponentPo extends PageObject {
  get posts() {
    return this.getAllByAutomationId('post');
  }
}
