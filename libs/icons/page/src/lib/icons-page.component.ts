import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsPageComponent {}
