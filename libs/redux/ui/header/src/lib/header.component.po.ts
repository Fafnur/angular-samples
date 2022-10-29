import { PageObject } from '@angular-samples/core/testing';

export class HeaderComponentPo extends PageObject {
  get nav() {
    return this.getByAutomationId('nav');
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

  get home() {
    return this.getByAutomationId('home');
  }
}
