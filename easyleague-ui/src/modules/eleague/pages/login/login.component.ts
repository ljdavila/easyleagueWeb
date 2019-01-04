import { AuthenticationService } from 'src/modules/common/services/authentication';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayload } from 'src/modules/common/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {
  }


  ngOnInit() {
    // if (this.auth.isLoggedIn()) { this.router.navigate(['/home']); }
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
    });
  }
}
