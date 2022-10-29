import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Post } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

@Component({
  selector: 'angular-samples-posts-last',
  templateUrl: './posts-last.component.html',
  styleUrls: ['./posts-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsLastComponent implements OnInit {
  @Input() view = 8;

  posts$!: Observable<Post[]>;

  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsLast$.pipe(map((posts) => posts.slice(0, this.view)));
  }

  trackByFn(index: number, post: Post): string {
    return post.uuid.toString();
  }
}
