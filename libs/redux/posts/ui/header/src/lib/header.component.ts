import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';

import { PATH_REMOTE, REDUX_TYPE } from '@angular-samples/redux/config';

/**
 * Post page header component
 */
@Component({
  selector: 'angular-samples-post-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  /**
   * Redux application type
   */
  type!: string;

  /**
   * Check application. If this is shell application then true.
   */
  isHome = false;

  constructor(
    @Optional() @Inject(REDUX_TYPE) private readonly reduxType: string | null,
    @Optional() @Inject(PATH_REMOTE) private readonly pathRemote: string | null
  ) {}

  ngOnInit(): void {
    // Default label for shell application
    this.type = this.reduxType ?? 'State Management';
    this.isHome = !!this.pathRemote;
  }
}
