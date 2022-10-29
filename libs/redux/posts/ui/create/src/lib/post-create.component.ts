import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PostCreateDialogComponent } from './post-create-dialog/post-create-dialog.component';

@Component({
  selector: 'angular-samples-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent {
  constructor(private readonly matDialog: MatDialog) {}

  onCreate(): void {
    void this.matDialog.open(PostCreateDialogComponent, { disableClose: true, width: '600px' });
  }
}
