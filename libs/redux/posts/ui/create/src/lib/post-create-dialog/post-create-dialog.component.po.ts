import { PageObject } from '@angular-samples/core/testing';

export class PostCreateDialogComponentPo extends PageObject {
  get create() {
    return this.getByAutomationId('create');
  }

  get cancel() {
    return this.getByAutomationId('cancel');
  }

  click(): void {
    this.triggerEventHandler(this.create, 'click');
  }
}
