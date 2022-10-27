import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor(@Inject(DOCUMENT) public readonly document: Document) {}

  get window(): Window {
    const window: Window | null = this.document?.defaultView ?? null;

    if (window === null) {
      throw new Error('Default view is not defined!');
    }

    return window;
  }
}
