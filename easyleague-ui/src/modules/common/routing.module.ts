import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideFormComponent } from './components/sideform';

const routes: Routes = [
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
//   {
//     path: '**',
//     component: PageNotFoundComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
