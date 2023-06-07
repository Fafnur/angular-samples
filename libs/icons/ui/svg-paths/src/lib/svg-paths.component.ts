import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconMaterialService } from '@angular-samples/core/icons';

const ICONS: { name: string; path: string }[] = [
  {
    name: 'facebook',
    path: '/assets/icons/facebook.svg',
  },
  {
    name: 'instagram',
    path: '/assets/icons/instagram.svg',
  },
  {
    name: 'telegram',
    path: '/assets/icons/telegram.svg',
  },
];

@Component({
  selector: 'angular-samples-svg-paths',
  templateUrl: './svg-paths.component.html',
  styleUrls: ['./svg-paths.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPathsComponent {
  constructor(private readonly iconService: IconMaterialService) {
    for (const icon of ICONS) {
      this.iconService.addPath(icon.name, icon.path);
    }
  }
}
