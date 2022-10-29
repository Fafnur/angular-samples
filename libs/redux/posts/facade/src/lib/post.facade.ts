import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';

/**
 * Facade to encapsulate State Management such as Ngrx, Ngxs or Akita
 */
@Injectable()
export abstract class PostFacade {
  /**
   * A flag that indicates whether posts have been loaded.
   */
  loaded$!: Observable<boolean>;

  /**
   * All posts for application
   */
  posts$!: Observable<Post[]>;

  /**
   * Posts where the promo property is set to true
   */
  postsPromo$!: Observable<Post[]>;

  /**
   * Posts sorted by views desc
   */
  postsPopular$!: Observable<Post[]>;

  /**
   * Posts sorted by created desc
   */
  postsLast$!: Observable<Post[]>;

  /**
   * Handle Post Load Success
   */
  loadSuccess$!: Observable<Post[]>;

  /**
   * Handle Post Load Failure
   */
  loadFailure$!: Observable<unknown>;

  /**
   * Handle Post Create Success
   */
  createSuccess$!: Observable<Post>;

  /**
   * Handle Post Create Failure
   */
  createFailure$!: Observable<unknown>;

  /**
   * Handle Post Change Success
   */
  changeSuccess$!: Observable<Post>;

  /**
   * Handle Post Change Failure
   */
  changeFailure$!: Observable<unknown>;

  /**
   * Handle Post Remove Success
   */
  removeSuccess$!: Observable<string>;

  /**
   * Handle Post Remove Failure
   */
  removeFailure$!: Observable<unknown>;

  /**
   * Handle Post Clear Success
   */
  clearSuccess$!: Observable<void>;

  /**
   * Handle Post Clear Failure
   */
  clearFailure$!: Observable<unknown>;

  /**
   * Return Post by uuid
   */
  post$!: (uuid: string) => Observable<Post | null>;

  /**
   * Method that returns a list of posts
   */
  abstract load(): void;

  /**
   * Method that create the post
   */
  abstract create(postCreate: PostCreate): void;

  /**
   * Method that change the post
   */
  abstract change(postChange: PostChange): void;

  /**
   * Method that remove the post
   */
  abstract remove(uuid: string): void;

  /**
   * Method that remove all posts
   */
  abstract clear(): void;
}
