import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {}
