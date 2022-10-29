import { PageObject } from '@angular-samples/core/testing';

export class PageComponentPo extends PageObject {
  get container() {
    return this.getByAutomationId('container');
  }

  get header() {
    return this.getByAutomationId('header');
  }

  get article() {
    return this.getByAutomationId('article');
  }

  get popular() {
    return this.getByAutomationId('popular');
  }
}
