import { PageObject } from '@angular-samples/core/testing';

export class PageComponentPo extends PageObject {
  get promo() {
    return this.getByAutomationId('promo');
  }

  get last() {
    return this.getByAutomationId('last');
  }

  get popular() {
    return this.getByAutomationId('popular');
  }

  get container() {
    return this.getByAutomationId('container');
  }

  get title() {
    return this.getByAutomationId('title');
  }
}
