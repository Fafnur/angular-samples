import { DOCUMENT } from '@angular/common';
import { inject, Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly state: Record<string, SVGSVGElement | null> = {};
  private readonly document = inject(DOCUMENT);
  private readonly sanitizer = inject(DomSanitizer, { optional: true });

  add(name: string, icon: string): void {
    const source = this.sanitizer ? this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(icon)) : icon;

    if (!source) {
      console.error(`Not valid icon ${name} with content ${icon}`);

      return;
    }

    this.state[name] = this.getSvg(source);
  }

  get(name: string): SVGSVGElement | null {
    const source = this.state[name] ?? null;

    if (!source) {
      console.error(`Icon ${name} not found. You should register icon in IconService`);

      return null;
    }

    return source.cloneNode(true) as SVGSVGElement;
  }

  private getSvg(source: string): SVGSVGElement | null {
    const div = this.document.createElement('div');
    div.innerHTML = source;
    const svg = div.querySelector('svg');

    if (!svg) {
      console.error('<svg> tag not found');

      return null;
    }

    // Reset SVG styles
    svg.removeAttribute('id');
    svg.setAttribute('fit', '');
    svg.setAttribute('height', '100%');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    // Disable IE11 default behavior to make SVGs focusable.
    svg.setAttribute('focusable', 'false');

    return svg;
  }
}
