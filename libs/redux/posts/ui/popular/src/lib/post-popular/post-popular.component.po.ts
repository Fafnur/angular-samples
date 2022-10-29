import { PageObject } from '@angular-samples/core/testing';

export class PostPopularComponentPo extends PageObject {
  get link() {
    return this.getByAutomationId('link');
  }

  get image() {
    return this.getByAutomationId('image');
  }

  get title() {
    return this.getByAutomationId('title');
  }
}
