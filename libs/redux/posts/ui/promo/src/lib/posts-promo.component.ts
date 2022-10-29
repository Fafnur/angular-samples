import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PATH_REMOTE } from '@angular-samples/redux/config';
import { Post } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';
import { CarouselSlide } from '@angular-samples/ui/carousel';

@Component({
  selector: 'angular-samples-posts-promo',
  templateUrl: './posts-promo.component.html',
  styleUrls: ['./posts-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPromoComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(
    private readonly router: Router,
    private readonly postFacade: PostFacade,
    @Optional() @Inject(PATH_REMOTE) private readonly pathRemote: string | null
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsPromo$;
  }

  onClicked(slide: CarouselSlide): void {
    const path = this.pathRemote ? ['/', this.pathRemote, 'post', slide.uuid] : ['/post', slide.uuid];

    void this.router.navigate(path);
  }
}
