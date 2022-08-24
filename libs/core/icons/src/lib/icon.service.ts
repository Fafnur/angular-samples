import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Service for creating custom svg icons using Angular Material icons.
 *
 * @example
 * // Add service on constructor on your component. On constructor call method add.
 * @Component({})
 * class YourComponent {
 *   constructor(private readonly iconService: IconService) {
 *     this.iconService.addUrl('yourIcon', '/path/to/your-icon.svg');
 *   }
 * }
 *
 * @example
 * // For optimization, use svg sources.
 * const yourIcon = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 *   <rect width="100" height="100" x="0" y="0" style="fill:#3f51b5;" ry="12" />
 *   <ellipse style="fill:#ffffff;" cx="54" cy="64" rx="4" ry="4" />
 * </svg>`;
 *
 * @Component({})
 * class YourComponent {
 *   constructor(private readonly iconService: IconService) {
 *     this.iconService.add('yourIcon', yourIcon);
 *   }
 * }
 */
@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {}

  /**
   * Add a new icon from source.
   *
   * @param name Name icon
   * @param source SVG data
   */
  add(name: string, source: string): void {
    void this.iconRegistry.addSvgIconLiteral(name, this.sanitizer.bypassSecurityTrustHtml(source));
  }

  /**
   * Add a new icon from source.
   *
   * @param name Name icon
   * @param path Path to SVG (relative or absolute)
   */
  addUrl(name: string, path: string): void {
    void this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path));
  }
}
