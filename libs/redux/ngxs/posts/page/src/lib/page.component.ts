import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-ngxs-posts-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {}
