import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Posts page component
 */
@Component({
  selector: 'angular-samples-ngrx-posts-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {}
