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
  @Output() clicked = new EventEmitter<CarouselSlide>();

  onClick(): void {
    this.clicked.emit(this.slide);
  }

  get ngStyle(): { backgroundImage: string } | null {
    return this.slide.image?.length ? { backgroundImage: `url(${this.slide.image})` } : null;
  }
}
