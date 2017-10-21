import {Component, ViewChild, ElementRef} from '@angular/core';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // directives: [ Carousel, CarouselSlide, CarouselCaption]
})
export class AppComponent {
  // @ViewChild('carousel') prev : ElementRef;

  public imageSources: string[] = [
     '../assets/images/beach.jpg',
     '../assets/images/tanque.jpg',
    '../assets/images/balcon.jpg'
  ];

  // public config: ICarouselConfig = {
  //   verifyBeforeLoad: true,
  //   log: false,
  //   animation: true,
  //   animationType: AnimationConfig.SLIDE,
  //   autoplay: false,
  //   autoplayDelay: 2000,
  //   stopAutoplayMinWidth: 768
  // };

  onPrevious() {
    // this.prev.nativeElement.carousel('prev');
  }
}
