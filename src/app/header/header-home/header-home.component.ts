import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: 'header-home.component.html',
  styleUrls: ['header-home.component.css'],
  host: {
       '(window:scroll)': 'updateHeader($event)'
   }
})
export class HeaderHomeComponent {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 1;

  constructor() {}

  updateHeader(evt) {
      this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
      if(this.currPos >= this.changePos ) {
          this.isScrolled = true;
      } else {
          this.isScrolled = false;
      }
  }
}
