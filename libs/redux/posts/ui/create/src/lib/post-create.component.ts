import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { PostCreateDialogComponent } from './post-create-dialog/post-create-dialog.component';

/**
 * Post create component
 */
@Component({
  selector: 'angular-samples-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent {
  constructor(private readonly matDialog: MatDialog) {}

  /**
   * This method open dialog window with post form
   */
  onCreate(): void {
    void this.matDialog.open(PostCreateDialogComponent, { disableClose: true, width: '600px' });
  }
}
