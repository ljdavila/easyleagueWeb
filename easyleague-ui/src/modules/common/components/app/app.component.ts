import { Component } from '@angular/core';
import {MDCRipple} from '@material/ripple/index';
import { routeAnimations } from '../../animations/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'EasyLeague';
}
