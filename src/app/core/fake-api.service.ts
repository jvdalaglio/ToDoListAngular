import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { json } from 'body-parser';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(
    private http: HttpClient
  ) { }

  url: string = "http://localhost:3000"

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`)
  }

  createUser(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(`${this.url}/users`, body,{'headers':headers})
  }
}
