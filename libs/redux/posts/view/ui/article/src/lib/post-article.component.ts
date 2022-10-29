import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostArticleComponent {
  @Input() post!: Post;
}
