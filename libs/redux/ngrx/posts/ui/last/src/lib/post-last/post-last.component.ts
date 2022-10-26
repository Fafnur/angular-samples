import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-post-last',
  templateUrl: './post-last.component.html',
  styleUrls: ['./post-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostLastComponent {
  @Input() post!: Post;
}
