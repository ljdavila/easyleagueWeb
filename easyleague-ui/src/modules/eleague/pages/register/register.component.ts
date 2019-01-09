import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayload, UserDetails } from 'src/modules/common/models';
import { AuthenticationService } from 'src/modules/common/services/authentication';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.credentials = {
      email: '',
      name: '',
      password: ''
    };
  }
  // register(body) {
  //   this.authService.register(this.credentials, body).subscribe(() => {
  //     this.router.navigateByUrl('/profile');
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }



}
