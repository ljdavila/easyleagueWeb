import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../animations/slideIn-slideOut';
import { slideInOutAnimationLeft } from '../../animations/slideIn-left';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: [slideInOutAnimationLeft],
  host: { '[@slideInOutAnimationLeft]': ''}
})
export class SideMenuComponent {
  showFiller = false;

}
