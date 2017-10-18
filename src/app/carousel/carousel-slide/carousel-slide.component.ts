import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html'
})
export class CarouselSlideComponent implements OnInit{
@Input() slide: { title: string, imgPath: string, description: string }


    ngOnInit() {
      // this.slide = { title:'First slide label', imgPath: 'https://lorempixel.com/900/500?r=1', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'}
    }

}
