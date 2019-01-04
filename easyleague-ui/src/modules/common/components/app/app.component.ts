import { AuthenticationService } from 'src/modules/common/services/authentication';
import { Component } from '@angular/core';
import {MDCRipple} from '@material/ripple/index';
import { routeAnimations } from '../../animations/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'EasyLeague';

  constructor(public auth: AuthenticationService, private router: Router) {
    if (auth.isLoggedIn()) {
      router.navigate(['/home']);
    }
  }
}
