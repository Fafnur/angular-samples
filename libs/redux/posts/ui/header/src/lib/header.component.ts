import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Optional } from '@angular/core';

export const REDUX_TYPE = new InjectionToken<string>('REDUX_TYPE');

@Component({
  selector: 'angular-samples-post-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly type: string;

  constructor(@Optional() @Inject(REDUX_TYPE) private readonly reduxType: string | null) {
    this.type = this.reduxType ?? 'State Management';
  }
}
