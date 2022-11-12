import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Post } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

/**
 * Posts last component
 */
@Component({
  selector: 'angular-samples-posts-last',
  templateUrl: './posts-last.component.html',
  styleUrls: ['./posts-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsLastComponent implements OnInit {
  /**
   * Count posts for view
   */
  @Input() view = 8;

  /**
   * Posts collection
   */
  posts$!: Observable<Post[]>;

  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsLast$.pipe(map((posts) => posts.slice(0, this.view)));
  }

  trackByFn(index: number, post: Post): string {
    return post.uuid.toString();
  }
}
