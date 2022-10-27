import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

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
    private readonly postFacade: PostFacade
  ) {}

  ngOnInit(): void {
    const { uuid } = this.route.snapshot.params;

    if (uuid) {
      this.postFacade
        .post$(uuid)
        .pipe(
          tap((post) => {
            this.post = post;

            this.changeDetectorRef.markForCheck();
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    } else {
      // todo: redirect
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
