/**
 * Interface for entities received by API
 */
export interface PostDto {
  /**
   * Unique id for entity
   */
  readonly uuid: string;

  /**
   * Post title
   */
  readonly title: string;

  /**
   * Post description
   */
  readonly body: string;

  /**
   * Post creation date
   */
  readonly created: string;

  /**
   * Post update date
   */
  readonly updated: string;

  /**
   * Number of post views
   */
  readonly views: number;

  /**
   * Is promo post
   */
  readonly promo: boolean;

  /**
   * Number of post likes
   */
  readonly likes: number;

  /**
   * Post image
   */
  readonly image: string | null;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * Interface for entities used on application.
 * This interface is necessary to create custom properties for post
 */
export interface Post extends PostDto {}
/* eslint-enable @typescript-eslint/no-empty-interface */

/**
 * Interface for new post
 */
export interface PostCreate {
  /**
   * Unique id for entity
   */
  readonly uuid: string;

  /**
   * Post title
   */
  readonly title: string;

  /**
   * Post description
   */
  readonly body: string;

  /**
   * Is promo post
   */
  readonly promo: boolean;

  /**
   * Post image
   */
  readonly image: string | null;
}

/**
 * Type for changed post
 */
export type PostChange = Partial<Post> & { uuid: string };
