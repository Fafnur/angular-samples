import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/**
 * PageObject for angular components.
 */
export class PageObject<T = unknown> {
  /**
   * Component fixture or wrapper component fixture.
   * @protected
   */
  protected readonly fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  /**
   * Method for find debug element by automationId
   *
   * @param automationId Automation id attribute on HTML
   * @protected
   */
  protected getByAutomationId(automationId: string): DebugElement | null {
    return this.fixture.debugElement.query(By.css(`[automation-id="${automationId}"]`)) ?? null;
  }

  /**
   * Method for find all debug elements by automationId
   *
   * @param automationId Automation id attribute on HTML
   * @protected
   */
  protected getAllByAutomationId(automationId: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(`[automation-id="${automationId}"]`));
  }

  /**
   * Method that finds debug element by automationId and return textContent
   * @param element Debug element or automation id
   * @protected
   */
  protected text(element: DebugElement | string): string | null {
    const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

    if (!el) {
      return null;
    }

    return el.nativeElement.textContent.trim();
  }

  /**
   * Method for call js event
   *
   * @param element Debug element or automation id
   * @param eventName Event name (click or custom angular output, like as opened, clicked, viewed)
   * @param payload Event payload
   * @protected
   */
  protected triggerEventHandler(
    element: DebugElement | string | null,
    eventName: string,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    payload: unknown | null = null
  ): void {
    if (element !== null) {
      const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

      el?.triggerEventHandler(eventName, payload);
    } else {
      console.warn('Element on triggerEventHandler is NULL');
    }
  }
}
