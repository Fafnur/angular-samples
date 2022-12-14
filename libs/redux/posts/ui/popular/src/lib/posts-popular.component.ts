import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Post } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

/**
 * Posts popular component
 */
@Component({
  selector: 'angular-samples-posts-popular',
  templateUrl: './posts-popular.component.html',
  styleUrls: ['./posts-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPopularComponent implements OnInit {
  /**
   * Count posts for view
   */
  @Input() view = 4;

  /**
   * Posts collection
   */
  posts$!: Observable<Post[]>;

  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsPopular$.pipe(map((posts) => posts.slice(0, this.view)));
  }

  trackByFn(index: number, post: Post): string {
    return post.uuid.toString();
  }
}
