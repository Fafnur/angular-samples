import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconMaterialService } from '@angular-samples/core/icons';

import { facebookIcon, instagramIcon, telegramIcon } from './svg-sources.icons';

const ICONS: { name: string; source: string }[] = [
  {
    name: 'facebook',
    source: facebookIcon,
  },
  {
    name: 'instagram',
    source: instagramIcon,
  },
  {
    name: 'telegram',
    source: telegramIcon,
  },
];

@Component({
  selector: 'angular-samples-svg-sources',
  templateUrl: './svg-sources.component.html',
  styleUrls: ['./svg-sources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSourcesComponent {
  constructor(private readonly iconService: IconMaterialService) {
    for (const icon of ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }
}
