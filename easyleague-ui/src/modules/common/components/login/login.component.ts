import { Router } from '@angular/router';
import { AuthenticationService } from 'src/modules/common/services/authentication';
import { Component, Output, EventEmitter } from '@angular/core';
import { TokenPayload } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent {
  @Output() animationChange = new EventEmitter();
  signupState = 'out';
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
    });
  }

  toggleSignup() {
    this.signupState = this.signupState === 'out' ? 'in' : 'out';
    this.animationChange.emit(this.signupState);

  }
}
