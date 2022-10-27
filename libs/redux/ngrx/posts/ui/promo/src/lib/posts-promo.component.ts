import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { Post } from '@angular-samples/redux/posts/common';
import { CarouselSlide } from '@angular-samples/ui/carousel';

@Component({
  selector: 'angular-samples-posts-promo',
  templateUrl: './posts-promo.component.html',
  styleUrls: ['./posts-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPromoComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private readonly router: Router, private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.posts$ = this.postFacade.postsPromo$;
  }

  onClicked(slide: CarouselSlide): void {
    void this.router.navigate(['/ngrx/posts/', slide.uuid]);
  }
}
