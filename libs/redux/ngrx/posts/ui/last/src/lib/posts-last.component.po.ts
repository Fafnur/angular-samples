import { PageObject } from '@angular-samples/core/testing';

export class PostsLastComponentPo extends PageObject {
  get row() {
    return this.getByAutomationId('row');
  }

  get columns() {
    return this.getAllByAutomationId('column');
  }

  get posts() {
    return this.getAllByAutomationId('post');
  }
}
