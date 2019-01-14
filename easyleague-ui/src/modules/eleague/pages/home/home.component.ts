import { Component, OnInit, ViewChild, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { $ } from 'protractor';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    /******** left corner *************/
      trigger('slideOutIn', [
        state('out', style({
          transform: 'translate3d(0, 0, 0)'
        })),
        state('in', style({
          transform: 'translate3d(-100%, 0, 0)'
        })),
        transition('out => in', animate('400ms ease-in-out')),
        transition('in => out', animate('400ms ease-in-out'))
      ]),

    /******** right corner *************/
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('out => in', animate('400ms ease-in-out')),
      transition('in => out', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('scoreboard') template;
  @ViewChild('scorecard') container;

  cards = ['#benjamin', 'Nets beat Mavs', 'Luis with 40', '#Eleague', 'Mark retires',
  '#benjamin', 'Nets beat Mavs', 'Luis with 40', '#Eleague', 'Mark retires'];
  options = [ 'Basketball', 'Baseball', 'Volleyball', 'Hockey'];
  tops = [ 'Top Scorer', 'Top Rebounder', 'Top Assist', 'Top Steals'];
  users;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {   }
    signupState = 'out';

    ngOnInit() {}

    toggleAnimation() {
      console.log('toggle');
      this.signupState = this.signupState === 'out' ? 'in' : 'out';
      const comment = this.renderer.createComment(this.template.nativeElement);
      console.log(this.template);
      console.log(this.container);
      // const copy = template;
      setTimeout(() => {
        this.renderer.removeChild(this.elRef.nativeElement, this.template.nativeElement);
        this.renderer.appendChild(this.container.nativeElement, this.template.nativeElement);
      }, 550);

      console.log('rest');
    }
}
