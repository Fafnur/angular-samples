import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';
import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit, OnDestroy {
  post!: Post;

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
            void this.router.navigate(['/ngrx']);
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
            void this.router.navigate(['/ngrx']);
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
