import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';

import { IconService } from './icon.service';

@Component({
  selector: 'angular-samples-icon, [angularSamplesIcon]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  @Input() set icon(icon: string) {
    if (icon) {
      const svg = this.iconService.get(icon);

      if (svg) {
        this.elementRef.nativeElement.appendChild(svg);
      }
    }
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>, private readonly iconService: IconService) {}
}
