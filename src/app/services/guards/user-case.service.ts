import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserCaseService {

  constructor(private Router: Router) { }

  token: any = localStorage.getItem('access_token');
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);


  public autentica_user(): boolean {
    if(this.decodedToken.tipo === '2') return true
    else {
      this.Router.navigate(['/home-adm']);
      return false
    }
  }
}
