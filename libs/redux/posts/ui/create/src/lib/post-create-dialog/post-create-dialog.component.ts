import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Subject, takeUntil, tap } from 'rxjs';

import { FormFor } from '@angular-samples/core/types';
import { uuidv4 } from '@angular-samples/core/uuid';
import { PostCreate } from '@angular-samples/redux/posts/common';
import { PostFacade } from '@angular-samples/redux/posts/facade';

/**
 * Post create dialog component
 */
@Component({
  selector: 'angular-samples-post-create-dialog',
  templateUrl: './post-create-dialog.component.html',
  styleUrls: ['./post-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateDialogComponent implements OnInit, OnDestroy {
  /**
   * Form submitted
   */
  submitted = false;

  /**
   * Form group for a new post
   */
  readonly form = new FormGroup<FormFor<PostCreate>>({
    uuid: new FormControl(uuidv4(), { nonNullable: true, validators: [Validators.required] }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    body: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(20)] }),
    image: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5)] }),
    promo: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });

  /**
   * Subject for unsubscribe
   */
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly matDialogRef: MatDialogRef<PostCreateDialogComponent>,
    private readonly postFacade: PostFacade
  ) {}

  ngOnInit(): void {
    this.postFacade.createSuccess$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.matDialogRef.close();

          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.postFacade.createFailure$
      .pipe(
        tap(() => {
          this.submitted = false;
          this.form.enable();

          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Submit form
   */
  onSubmit(): void {
    // Show errors for required fields
    this.form.markAllAsTouched();

    // If form valid and was not send then send form
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.form.disable();

      this.postFacade.create(this.form.getRawValue());
    } else {
      // TODO: Scroll to field
    }

    this.changeDetectorRef.markForCheck();
  }
}
