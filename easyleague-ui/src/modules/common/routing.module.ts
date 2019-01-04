import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './../eleague/pages/home/home.component';
import { ProfileComponent } from './../eleague/pages/profile/profile.component';
import { AuthGuard } from './guards/authentication.guard';
import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideFormComponent } from './components/sideform';
import { LoginComponent } from '../eleague/pages/login/login.component';
import { RegisterComponent } from '../eleague/pages/register';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    component: SideMenuComponent,
    outlet: 'sidemenu'
  },
  {
    path: 'add',
    component: SideFormComponent,
    outlet: 'sideform'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];
//   {
//     path: '**',
//     component: PageNotFoundComponent
//   }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
