import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {}

  add(name: string, source: string): void {
    void this.iconRegistry.addSvgIconLiteral(name, this.sanitizer.bypassSecurityTrustHtml(source));
  }

  addUrl(name: string, path: string): void {
    void this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path));
  }
}
