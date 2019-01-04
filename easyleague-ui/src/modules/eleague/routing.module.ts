import { AuthGuard } from './../common/guards/authentication.guard';
import { HomeComponent } from './pages/home/home.component';
/*
** Licensed Materials - Property of IBM and GTD Holdings
*Copyright IBM Corp. and GTD Holdings Inc. 2017, 2018. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Pages from './pages';
import { TeamResolver } from '../common/resolvers/team.resolver';
import { ListPageComponent } from './pages/list';

const routes: Routes = [
  {
    path: 'home',
    component: Pages.HomeComponent,
  },
  {
    path: 'team/:id',
    component: Pages.TeamComponent,
    resolve: {
     team: TeamResolver
    }
  },
  {
    path: 'teams',
    component: ListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
