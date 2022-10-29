import { PageObject } from '@angular-samples/core/testing';

export class CardComponentPo extends PageObject {
  get link() {
    return this.getByAutomationId('link');
  }

  get type() {
    return this.getByAutomationId('type');
  }

  get image() {
    return this.getByAutomationId('image');
  }
}
