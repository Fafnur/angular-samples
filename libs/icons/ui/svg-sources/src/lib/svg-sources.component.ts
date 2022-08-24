import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-samples-svg-sources',
  templateUrl: './svg-sources.component.html',
  styleUrls: ['./svg-sources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSourcesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
