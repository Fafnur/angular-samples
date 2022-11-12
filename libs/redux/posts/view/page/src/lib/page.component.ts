import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { Post } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

/**
 * Post view component
 */
@Component({
  selector: 'angular-samples-post-view-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit, OnDestroy {
  /**
   * Post. Will be loaded by id from url
   */
  post!: Post;

  /**
   * Destroy subject for unsubscribe
   */
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly postFacade: PostFacade
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          const { uuid } = params;

          if (!uuid) {
            // Note: Redirect should be moved on guard or ngrx effect
            void this.router.navigate(['/']);
          }

          return uuid;
        }),
        filter((uuid) => !!uuid),
        switchMap((uuid) => this.postFacade.post$(uuid)),
        tap((post) => {
          if (post) {
            this.post = post;
            this.changeDetectorRef.markForCheck();
          } else {
            // Note: Redirect should be moved on guard or ngrx effect
            void this.router.navigate(['/']);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
