import { LoginComponent } from './login/login.component';
import { ImageBadgeComponent } from './image-badge/badge.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { NavbarComponent } from './navbar';
import { PlayerCardComponent } from './eleague-player-card';
import { TeamCardComponent } from './eleague-team-card';
import { SideFormComponent } from './sideform';
import { SignupComponent } from './signup';
export * from './navbar';
export * from './eleague-player-card';
export * from './eleague-team-card';
export * from './sidemenu';
export * from './sideform';
export * from './image-badge';
export * from './signup';
export * from './login';


export const COMPONENT_DECLARATIONS = [
  NavbarComponent,
  SideMenuComponent,
  PlayerCardComponent,
  TeamCardComponent,
  SideFormComponent,
  CreateTeamComponent,
  ImageBadgeComponent,
  SignupComponent,
  LoginComponent
];
