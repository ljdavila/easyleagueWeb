import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('appear', style({ transform: 'translateX(-10%)' })),
      transition(':enter', [
        style({ transform: 'translateX(0)' }),
        animate('0s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class NavbarComponent {
  @Output() sideMenu = new EventEmitter<boolean>();
  @Input() drawer;
  open = false;
  openSideMenu = false;

  constructor(private _location: Location, private router: Router,
              private authService: AuthenticationService) { }

  logout() {
    this.authService.logout();
  }

  toggleSideMenu() {
    console.log(this.openSideMenu);
    if (this.openSideMenu) {
      this.router.navigate([{ outlets: { sidemenu: ['menu'] } }]);
    } else {
      this.router.navigate(['/', {outlets: {sidemenu: null}}]);
    }
  }
}
