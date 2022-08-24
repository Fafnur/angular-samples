import { PageObject } from '@angular-samples/core/testing';

export class SvgSourcesComponentPo extends PageObject {
  get nav() {
    return this.getByAutomationId('nav');
  }

  get facebook() {
    return this.getByAutomationId('facebook');
  }

  get instagram() {
    return this.getByAutomationId('instagram');
  }

  get telegram() {
    return this.getByAutomationId('telegram');
  }
}
