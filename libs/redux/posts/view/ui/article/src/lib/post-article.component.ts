import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@angular-samples/redux/posts/common';

/**
 * Post article component
 */
@Component({
  selector: 'angular-samples-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostArticleComponent {
  /**
   * Post for viewing
   */
  @Input() post!: Post;
}
