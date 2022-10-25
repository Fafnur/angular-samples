import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-posts-popular',
  templateUrl: './posts-popular.component.html',
  styleUrls: ['./posts-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPopularComponent implements OnInit {
  @Input() view = 4;

  posts$!: Observable<Post[]>;

  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsPopular$.pipe(map((posts) => posts.slice(0, this.view)));
  }
}
