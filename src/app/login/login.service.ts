import { AuthGuardUserService } from './../services/auth-guard-user.service';
import { AuthGuardAdminService } from './../services/auth-guard-admin.service';
import { API_PATH } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './login.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private HttpClient: HttpClient, private AuthGuardAdminService: AuthGuardAdminService, private AuthGuardUserService: AuthGuardUserService) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  fazLogin(user: UserModel) {
    return this.HttpClient.post<UserModel>(
      `${API_PATH}/login/`,
      user
    ).toPromise()
    // .pipe(
    //   tap(
    //     (loginResponse ) => { 
    //       (this.AuthGuardAdminService.recebeToken(loginResponse.token)),
    //       (this.AuthGuardUserService.recebeToken(loginResponse.token))
    //     })
    // );
  }
}
