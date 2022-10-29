import { PageObject } from '@angular-samples/core/testing';

export class HeaderComponentPo extends PageObject {
  get header() {
    return this.getByAutomationId('header');
  }
}
