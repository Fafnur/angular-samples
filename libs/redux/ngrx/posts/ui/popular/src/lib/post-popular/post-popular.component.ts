import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-post-popular',
  templateUrl: './post-popular.component.html',
  styleUrls: ['./post-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPopularComponent {
  @Input() post!: Post;
}
