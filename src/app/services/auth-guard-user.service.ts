import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardUserService {
  tokenTraduzido?: any;

  constructor(private Router: Router) {}

  recebeToken(token?: string) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.tokenTraduzido = decodedToken.tipo;
  }

  canActivate( ): any {
    if (!this.tokenTraduzido) {
      return this.Router.navigate(['/']);
    } else {
      if (this.tokenTraduzido === '2') {
        return true;
      } else{
        return this.Router.navigate(['/home-adm']);
      }
    }
  }
}
