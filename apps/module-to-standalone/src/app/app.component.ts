import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from '@angular-samples/module-to-standalone/ui/header';

@Component({
  selector: 'angular-samples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderModule, RouterOutlet],
})
export class AppComponent {}
