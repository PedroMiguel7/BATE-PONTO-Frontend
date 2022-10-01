import { API_PATH } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private HttpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  fazLogin(user: UserModel) {
    return this.HttpClient.post<UserModel>(
      `${API_PATH}/login/`,
      user
    ).toPromise();
  }
}
