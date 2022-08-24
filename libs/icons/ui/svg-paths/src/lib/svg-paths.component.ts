import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-samples-svg-paths',
  templateUrl: './svg-paths.component.html',
  styleUrls: ['./svg-paths.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPathsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
