
import { Injectable, Optional, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  uri: string;

  constructor( private http: HttpClient ) {
    this.uri = 'http://localhost:4000/users';
  }

  addUser(body) {
    // const localVarHeaderParams: any = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Accept-Charset': 'utf-8',
    // };
    // const localVarFormParams: any = {};

    // const localVarRequestOptions: localVarRequest.Options = {
    //   method: 'POST',
    //   headers: localVarHeaderParams,
    //   uri: this.uri + '/team',
    //   json: true,
    //   body: body
    // };
    return this.http.post(this.uri + '/user', { body: body }).pipe(map(
      data => {
        console.log('data');
        console.log(data);
        return data;
      }
    ));
  }

  getAllUsers(): Observable<any> {
    console.log('Gettin users');
    return this.http.get(this.uri).pipe(map(
      data => {
        console.log('data');

        return data;
      },
      error => {
        console.log(error);
        return error;
      }
    ));
  }

  getUser(id: string): Observable<any> {
    const params: { [param: string]: string | string[] } = {};

    params._id = id;
    return this.http.get(`${this.uri}/user`, {params: params}).pipe(map(
      data => {
        return data;
      }
    ));
  }

  getUsersByName(name: string): Observable<any> {
    const params: { [param: string]: string | string[] } = {};

    params.name = name;
    return this.http.get(`${this.uri}/user`, {params: params}).pipe(map(
      data => {
        console.log(data);
        return data;
      }
    ));
  }
}
