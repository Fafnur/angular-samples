import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PostFacade } from '@angular-samples/redux/ngrx/posts/state';

@Component({
  selector: 'angular-samples-posts-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.postFacade.load();
  }
}
