export interface PostDto {
  readonly uuid: string;
  readonly title: string;
  readonly body: string;
  readonly created: string;
  readonly updated: string;

  // Additional
  readonly views: number;
  readonly promo: boolean;
  readonly likes: number;
  readonly image: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Post extends PostDto {
  // Custom props for UI
}

export interface PostCreate {
  readonly uuid: string;
  readonly title: string;
  readonly body: string;
  readonly promo: boolean;
  readonly image: string | null;
}

export type PostChange = Partial<Post> & { uuid: string };
