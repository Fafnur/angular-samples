import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';

/**
 * This action starts the loading the list of posts.
 */
export class Load {
  static readonly type = '[Post] Load';
}

/**
 * This action completes the loading of the list of posts and the saving posts on state.
 */
export class LoadSuccess {
  static readonly type = '[Post] Load Success';

  constructor(public readonly posts: Post[]) {}
}

/**
 * This action completes the loading of the list of posts and returns an API error.
 */
export class LoadFailure {
  static readonly type = '[Post] Load Failure';

  constructor(public readonly error: unknown) {}
}

/**
 * This action starts the loading a post by id.
 */
export class LoadOne {
  static readonly type = '[Post] Load One';

  constructor(public readonly uuid: string) {}
}

/**
 * This action completes the loading a post and the saving post on state.
 */
export class LoadOneSuccess {
  static readonly type = '[Post] Load One Success';

  constructor(public readonly post: Post | null) {}
}

/**
 * This action completes the loading a post and returns an API error.
 */
export class LoadOneFailure {
  static readonly type = '[Post] Load One Failure';

  constructor(public readonly error: unknown, public readonly uuid: string) {}
}

/**
 * This action starts the creation of a post.
 */
export class Create {
  static readonly type = '[Post] Create';

  constructor(public readonly postCreate: PostCreate) {}
}

/**
 * This action completes the creation of a post and the saving of the post on state.
 */
export class CreateSuccess {
  static readonly type = '[Post] Create Success';

  constructor(public readonly post: Post) {}
}

/**
 * This action completes the creation of a post and returns an API error.
 */
export class CreateFailure {
  static readonly type = '[Post] Create Failure';

  constructor(public readonly error: unknown) {}
}

/**
 * This action starts the changing of a post.
 */
export class Change {
  static readonly type = '[Post] Change';

  constructor(public readonly postChange: PostChange) {}
}

/**
 * This action completes the changing of a post and the saving of the post on state.
 */
export class ChangeSuccess {
  static readonly type = '[Post] Change Success';

  constructor(public readonly post: Post) {}
}

/**
 * This action completes the changing of a post and returns an API error.
 */
export class ChangeFailure {
  static readonly type = '[Post] Change Failure';

  constructor(public readonly error: unknown, public readonly uuid: string) {}
}

/**
 * This action starts the removing of a post.
 */
export class Remove {
  static readonly type = '[Post] Remove';

  constructor(public readonly uuid: string) {}
}

/**
 * This action completes the removing of a post and the removing of the post from state.
 */
export class RemoveSuccess {
  static readonly type = '[Post] Remove Success';

  constructor(public readonly uuid: string) {}
}

/**
 * This action completes the removing of a post and returns an API error.
 */
export class RemoveFailure {
  static readonly type = '[Post] Remove Failure';

  constructor(public readonly error: unknown, public readonly uuid: string) {}
}

/**
 * This action starts the removing of all posts.
 */
export class Clear {
  static readonly type = '[Post] Clear';
}

/**
 * This action completes the removing of all posts and the removing all posts from state.
 */
export class ClearSuccess {
  static readonly type = '[Post] Clear Success';
}

/**
 * This action completes the removing of all posts and returns an API error.
 */
export class ClearFailure {
  static readonly type = '[Post] Clear Failure';

  constructor(public readonly error: unknown) {}
}
