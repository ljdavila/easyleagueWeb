
import { Injectable, Optional, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class TeamsService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:4000/teams';
  }

  getTeam(id: string): Observable<any> {
    const params: { [param: string]: string | string[] } = {};
    params._id = id;
    console.log(params);
    return this.http.get(this.uri + '/team', { params: params }).pipe(map(
      data => {
        return data;
      }
    ),
      catchError((error) => {
        return error;
      })
    );
  }

  getMyTeams(id: string) {
    const params: { [param: string]: string | string[] } = {};
    params.coach_id = id;
    return this.http.get(this.uri + '/team', { params: params }).pipe(map(
      data => {
        console.log('data');
        console.log(data);
        return data;
      }
    ));
  }

  getAllPlayers(teamId: string): Observable<any> {

    return this.http.get(this.uri + teamId).pipe(map(
      data => {
        return data;
      }
    ));
  }
}
