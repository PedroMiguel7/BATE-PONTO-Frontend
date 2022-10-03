import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminCaseService {

  token: any = localStorage.getItem('access_token');
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);

  constructor(private Router: Router) { }

  public autentica_adm(): boolean {
    switch (this.decodedToken.tipo) {
      case "1": return true; break;
      default: this.Router.navigate(['/home-user']); return false; break;
    }
  }
}
