import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = ['paths', 'sources'];

  activeLink = this.links[0];

  onSelect(link: string): void {
    this.activeLink = link;
  }
}
