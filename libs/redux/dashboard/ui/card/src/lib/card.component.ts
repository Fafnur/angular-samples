import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Card with logo and link for redux application
 */
@Component({
  selector: 'angular-samples-home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  /**
   * Type redux application (ngrx, ngxs, akita)
   */
  @Input() type!: string;
}
