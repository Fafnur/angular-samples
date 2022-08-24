import { PageObject } from '@angular-samples/core/testing';

export class IconsPageComponentPo extends PageObject {
  get header() {
    return this.getByAutomationId('header');
  }

  get container() {
    return this.getByAutomationId('container');
  }
}
