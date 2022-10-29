import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

import { PostFacade } from '@angular-samples/redux/ngxs/posts/state';

@Component({
  selector: 'angular-samples-ngxs-posts-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  constructor(private readonly postFacade: PostFacade) {}

  ngOnInit(): void {
    this.postFacade.loadSuccess$.pipe(tap(console.log)).subscribe();

    this.postFacade.load();
  }
}
