import { map, catchError } from 'rxjs/operators';
/*
** Licensed Materials - Property of IBM and GTD Holdings
*Copyright IBM Corp. and GTD Holdings Inc. 2017, 2018. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TeamsService } from '../services';

@Injectable()
export class TeamResolver implements Resolve<any> {

  constructor(
    private teamService: TeamsService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.teamService.getTeam( route.params['id'] ).pipe(map(team => {
      if (!team.length) {
        this.router.navigate(['/home']);
      }
      return team;
    }),
    catchError ((error) => {
      console.log(error);
      this.router.navigate(['/home']);
      return of(null);
    })
    );
  }
}
