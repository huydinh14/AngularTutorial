import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://localhost:7226/api/Library/';

  constructor(private http: HttpClient) { }

  createAccount(user: User) {
    return this.http.post(this.baseUrl + "CreateAccount", user, {
      responseType: 'text',
    })
  }
  login(loginInfo: any) {
    let params = new HttpParams()
      .append('email', loginInfo.email)
      .append('password', loginInfo.password);
      return this.http.get(this.baseUrl + "Login", {
        params: params,
        responseType: 'text',
      });
  }
}
