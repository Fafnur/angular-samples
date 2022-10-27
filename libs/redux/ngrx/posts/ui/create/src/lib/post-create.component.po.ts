import { PageObject } from '@angular-samples/core/testing';

export class PostCreateComponentPo extends PageObject {
  get create() {
    return this.getByAutomationId('create');
  }

  click(): void {
    this.triggerEventHandler(this.create, 'click');
  }
}
