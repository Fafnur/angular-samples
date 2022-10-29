import { PageObject } from '@angular-samples/core/testing';

export class PostsPromoComponentPo extends PageObject {
  get carousel() {
    return this.getByAutomationId('carousel');
  }
}
