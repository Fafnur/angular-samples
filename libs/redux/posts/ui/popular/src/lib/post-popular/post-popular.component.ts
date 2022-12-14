import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, Optional } from '@angular/core';

import { PATH_REMOTE } from '@angular-samples/redux/config';
import { Post } from '@angular-samples/redux/posts/common';

@Component({
  selector: 'angular-samples-post-popular',
  templateUrl: './post-popular.component.html',
  styleUrls: ['./post-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPopularComponent implements OnInit {
  @Input() post!: Post;

  path!: string[];

  constructor(@Optional() @Inject(PATH_REMOTE) private readonly pathRemote: string | null) {}

  ngOnInit(): void {
    // Note: Dirty hack for fix navigation on shell and remote apps
    this.path = this.pathRemote ? ['/', this.pathRemote, 'post', this.post.uuid] : ['/post', this.post.uuid];
  }
}
