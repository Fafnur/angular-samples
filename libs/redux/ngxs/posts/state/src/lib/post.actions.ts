import { Post, PostChange, PostCreate } from '@angular-samples/redux/posts/common';

// Load
export class Load {
  static readonly type = '[Post] Load';
}

export class LoadSuccess {
  static readonly type = '[Post] Load Success';

  constructor(public readonly posts: Post[]) {}
}

export class LoadFailure {
  static readonly type = '[Post] Load Failure';

  constructor(public readonly error: unknown) {}
}

// Load One
export class LoadOne {
  static readonly type = '[Post] Load One';

  constructor(public readonly uuid: string) {}
}

export class LoadOneSuccess {
  static readonly type = '[Post] Load One Success';

  constructor(public readonly post: Post | null) {}
}

export class LoadOneFailure {
  static readonly type = '[Post] Load One Failure';

  constructor(public readonly error: unknown, public readonly uuid: string) {}
}

// Create
export class Create {
  static readonly type = '[Post] Create';

  constructor(public readonly postCreate: PostCreate) {}
}

export class CreateSuccess {
  static readonly type = '[Post] Create Success';

  constructor(public readonly post: Post) {}
}

export class CreateFailure {
  static readonly type = '[Post] Create Failure';

  constructor(public readonly error: unknown) {}
}

// Change
export class Change {
  static readonly type = '[Post] Change';

  constructor(public readonly postChange: PostChange) {}
}

export class ChangeSuccess {
  static readonly type = '[Post] Change Success';

  constructor(public readonly post: Post) {}
}

export class ChangeFailure {
  static readonly type = '[Post] Change Failure';

  constructor(public readonly error: unknown, public readonly uuid: string) {}
}

// Remove
export class Remove {
  static readonly type = '[Post] Remove';

  constructor(public readonly uuid: string) {}
}

export class RemoveSuccess {
  static readonly type = '[Post] Remove Success';

  constructor(public readonly uuid: string) {}
}

export class RemoveFailure {
  static readonly type = '[Post] Remove Failure';

  constructor(public readonly error: unknown, public readonly uuid: string) {}
}

// Clear
export class Clear {
  static readonly type = '[Post] Clear';
}

export class ClearSuccess {
  static readonly type = '[Post] Clear Success';
}

export class ClearFailure {
  static readonly type = '[Post] Clear Failure';

  constructor(public readonly error: unknown) {}
}
