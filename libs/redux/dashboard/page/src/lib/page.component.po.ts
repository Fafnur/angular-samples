import { PageObject } from '@angular-samples/core/testing';

export class PageComponentPo extends PageObject {
  get container() {
    return this.getByAutomationId('container');
  }

  get title() {
    return this.getByAutomationId('title');
  }

  get description() {
    return this.getByAutomationId('description');
  }

  get ngrx() {
    return this.getByAutomationId('ngrx');
  }

  get ngxs() {
    return this.getByAutomationId('ngxs');
  }

  get akita() {
    return this.getByAutomationId('akita');
  }

  get native() {
    return this.getByAutomationId('native');
  }
}
