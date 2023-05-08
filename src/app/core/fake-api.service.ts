import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

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
}
