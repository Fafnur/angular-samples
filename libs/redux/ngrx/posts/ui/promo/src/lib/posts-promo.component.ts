import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-samples-posts-promo',
  templateUrl: './posts-promo.component.html',
  styleUrls: ['./posts-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPromoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
