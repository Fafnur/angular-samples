import { PageObject } from '@angular-samples/core/testing';

export class PostArticleComponentPo extends PageObject {
  get title() {
    return this.getByAutomationId('title');
  }

  get body() {
    return this.getByAutomationId('body');
  }
}
