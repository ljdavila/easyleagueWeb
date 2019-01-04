import { LoginComponent } from './login/login.component';
import { ListPageComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team';
import { RegisterComponent } from './register';
import { ProfileComponent } from './profile';

export * from './home';
export * from './team';

export const COMPONENT_DECLARATIONS = [
  HomeComponent,
  TeamComponent,
  ListPageComponent,
  RegisterComponent,
  LoginComponent,
  ProfileComponent
];
