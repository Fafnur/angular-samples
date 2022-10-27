import { DebugElement } from '@angular/core';

import { PageObject } from '@angular-samples/core/testing';

import { GridMode } from '../../grid.util';

export class ColumnComponentPo extends PageObject {
  get column(): DebugElement | null {
    return this.getByAutomationId('column');
  }

  hasColumnClass(className: string): boolean {
    return this.column?.classes[className] ?? false;
  }

  setMode(mode: string | GridMode): void {
    if (this.column?.componentInstance) {
      this.column.componentInstance.mode = mode;
    }
  }
}
