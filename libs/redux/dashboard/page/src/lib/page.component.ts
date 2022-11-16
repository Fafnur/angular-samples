import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Page component for dashboard application
 */
@Component({
  selector: 'angular-samples-home-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {}
