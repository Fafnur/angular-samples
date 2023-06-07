import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IconsComponent } from './icons.component';

@Component({
  selector: 'angular-samples-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet, IconsComponent],
})
export class AppComponent {}
