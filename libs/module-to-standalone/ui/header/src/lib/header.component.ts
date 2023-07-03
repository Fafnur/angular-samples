import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'angular-samples-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
