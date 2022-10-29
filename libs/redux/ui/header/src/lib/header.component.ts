import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconService } from '@angular-samples/core/icons';

import { akitaIcon, ngrxIcon, ngxsIcon } from './header.icons';

const ICONS: { name: string; source: string }[] = [
  {
    name: 'ngrx',
    source: ngrxIcon,
  },
  {
    name: 'ngxs',
    source: ngxsIcon,
  },
  {
    name: 'akita',
    source: akitaIcon,
  },
];

@Component({
  selector: 'angular-samples-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly icons = ICONS;

  constructor(private readonly iconService: IconService) {
    for (const icon of ICONS) {
      this.iconService.add(icon.name, icon.source);
    }
  }
}
