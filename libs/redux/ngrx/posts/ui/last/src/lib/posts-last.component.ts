import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-samples-posts-last',
  templateUrl: './posts-last.component.html',
  styleUrls: ['./posts-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsLastComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
