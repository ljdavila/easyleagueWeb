import { SideMenuComponent } from './components/sidemenu/sidemenu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    component: SideMenuComponent,
    outlet: 'sidemenu'
  },
//   {
//     path: 'error',
//     component: ErrorComponent
//   },
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
