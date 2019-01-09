import { AuthenticationService } from 'src/modules/common/services/authentication';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayload } from 'src/modules/common/models';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
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
export class LandingComponent implements OnInit {
  signupState = 'out';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // if (this.auth.isLoggedIn()) { this.router.navigate(['/home']); }
  }

  toggleAnimation(animationState) {
    this.signupState = animationState;
  }
}
