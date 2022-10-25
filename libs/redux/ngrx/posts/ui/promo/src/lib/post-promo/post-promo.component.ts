import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-post-promo',
  templateUrl: './post-promo.component.html',
  styleUrls: ['./post-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPromoComponent {
  @Input() post!: Post;
}
