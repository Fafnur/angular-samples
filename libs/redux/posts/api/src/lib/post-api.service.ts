import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';

import { PostChange, PostCreate, PostDto } from '@angular-samples/redux/posts/common';

import { POSTS_DEFAULT } from './posts';

/**
 * @description InjectionToken for provide POSTS for demonstration
 */
export const POSTS = new InjectionToken<PostDto[]>('POSTS');

/**
 * @description Fake API news management CRUD service
 */
@Injectable()
export class PostApiService {
  /**
   * Collection posts uuids
   */
  private uuids: string[];

  /**
   * Dictionary posts
   */
  private entities: Record<string, PostDto>;

  constructor(@Optional() @Inject(POSTS) private readonly posts: PostDto[] | null) {
    const entities = this.posts ?? POSTS_DEFAULT;
    this.uuids = entities.map((post) => post.uuid);
    this.entities = entities.reduce((acc, current) => ({ ...acc, [current.uuid]: current }), {});
  }

  /**
   * @description Method to get a list of posts
   */
  get(): Observable<PostDto[]> {
    return new Observable((observer) => {
      try {
        observer.next(Object.values(this.entities) ?? []);
        observer.complete();
      } catch (error) {
        observer.error(error);
      }
    });
  }

  /**
   * @description Method to get post by id
   * @param uuid Uuid post
   */
  getOne(uuid: string): Observable<PostDto | null> {
    return new Observable((observer) => {
      try {
        const post = this.entities[uuid];
        if (post) {
          observer.next(post);
        } else {
          observer.error({ code: 404, message: 'Post not found' });
        }
      } catch (error) {
        observer.error(error);
      }
      observer.complete();
    });
  }

  /**
   * @description Method for remove post
   * @param uuid Uuid post
   */
  remove(uuid: string): Observable<void> {
    return new Observable((observer) => {
      try {
        this.uuids = this.uuids.filter((item) => item !== uuid);
        delete this.entities[uuid];
        observer.next();
      } catch (error) {
        observer.error(error);
      }
      observer.complete();
    });
  }

  /**
   * @description Method for remove all posts
   */
  clear(): Observable<void> {
    return new Observable((observer) => {
      try {
        this.uuids = [];
        this.entities = {};
        observer.next();
      } catch (error) {
        observer.error(error);
      }
      observer.complete();
    });
  }

  /**
   * @description Method for create post
   * @param postCreate New post
   */
  create(postCreate: PostCreate): Observable<PostDto> {
    return new Observable((observer) => {
      try {
        let post = this.entities[postCreate.uuid];
        const now = new Date().toISOString();
        if (post) {
          post = { ...post, ...postCreate, updated: now };
        } else {
          post = { ...postCreate, created: now, updated: now, likes: 0, views: 0 };
          this.uuids.push(post.uuid);
        }
        this.entities[post.uuid] = post;
        observer.next(post);
      } catch (error) {
        observer.error(error);
      }
      observer.complete();
    });
  }

  /**
   * @description Method for change post
   * @param postChanged Changed post
   */
  change(postChanged: PostChange): Observable<PostDto> {
    return new Observable((observer) => {
      try {
        let post = this.entities[postChanged.uuid];
        const now = new Date().toISOString();
        if (post) {
          post = { ...post, ...postChanged, updated: now };
          this.entities[post.uuid] = post;
        }
        observer.next(post);
      } catch (error) {
        observer.error(error);
      }
      observer.complete();
    });
  }
}
