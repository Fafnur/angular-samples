import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly links = [
    {
      route: '/',
      label: $localize`:Header:Home`,
    },
    {
      route: '/about',
      label: $localize`:Header:About`,
    },
    {
      route: '/contacts',
      label: $localize`:Header:Contacts`,
    },
  ];
}
