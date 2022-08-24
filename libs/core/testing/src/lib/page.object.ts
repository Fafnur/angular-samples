import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class PageObject<T = unknown> {
  protected readonly fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  protected getByAutomationId(automationId: string): DebugElement | null {
    return this.fixture.debugElement.query(By.css(`[automation-id="${automationId}"]`)) ?? null;
  }

  protected getAllByAutomationId(automationId: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(`[automation-id="${automationId}"]`));
  }

  protected text(element: DebugElement | string): string | null {
    const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

    if (!el) {
      return null;
    }

    return el.nativeElement.textContent.trim();
  }

  protected triggerEventHandler(
    element: DebugElement | string | null,
    eventName: string,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    eventObj: unknown | null = null
  ): void {
    if (element !== null) {
      const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

      el?.triggerEventHandler(eventName, eventObj);
    } else {
      console.warn('Element on triggerEventHandler is NULL');
    }
  }
}
