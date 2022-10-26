import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-posts-last',
  templateUrl: './posts-last.component.html',
  styleUrls: ['./posts-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsLastComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsLast$;
  }

  trackByFn(index: number, post: Post): string {
    return post.uuid.toString();
  }
}
