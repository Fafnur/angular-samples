import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-posts-last',
  templateUrl: './posts-last.component.html',
  styleUrls: ['./posts-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsLastComponent {}
