import { PageObject } from '@angular-samples/core/testing';

export class HeaderComponentPo extends PageObject {
  get nav() {
    return this.getByAutomationId('nav');
  }

  get paths() {
    return this.getByAutomationId('paths');
  }

  get sources() {
    return this.getByAutomationId('sources');
  }
}
