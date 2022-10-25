import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CarouselSlide } from '../carousel.interface';

@Component({
  selector: 'angular-samples-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselSlideComponent {
  @Input() slide!: CarouselSlide;
  @Input() active = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }

  get ngStyle(): { backgroundImage: string } | null {
    return this.slide.image?.length ? { backgroundImage: `url(${this.slide.image})` } : null;
  }
}
