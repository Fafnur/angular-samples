import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-samples-posts-popular',
  templateUrl: './posts-popular.component.html',
  styleUrls: ['./posts-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPopularComponent {}
