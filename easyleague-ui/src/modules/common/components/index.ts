import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { NavbarComponent } from './navbar';
import { PlayerCardComponent } from './eleague-player-card';
export * from './navbar';
export * from './eleague-player-card';
export * from './sidemenu';


export const COMPONENT_DECLARATIONS = [
  NavbarComponent,
  SideMenuComponent,
  PlayerCardComponent
];
