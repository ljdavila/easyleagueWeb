import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {

  slides = [{
    title:'First slide label',
    imgPath: 'https://lorempixel.com/900/500?r=1',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    title:'Second slide label',
    imgPath: 'https://lorempixel.com/900/500?r=2',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    title:'Third slide label',
    imgPath: 'https://lorempixel.com/900/500?r=3',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
}
