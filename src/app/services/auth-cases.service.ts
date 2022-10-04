import { AdminCaseService } from './guards/admin-case.service';
import { UserCaseService } from './guards/user-case.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthCasesService {

  token: any = localStorage.getItem('access_token');
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(this.token);

  constructor( private router: Router, private UserCaseService: UserCaseService, private AdminCaseService: AdminCaseService) { }

  public autenticacao(): boolean { 
    if(!this.token) { 
      this.router.navigate(['/'])
      return false
    }

    switch (this.decodedToken.tipo) {
      case "1": return this.AdminCaseService.autentica_adm("1"); break;
      case "2": return this.UserCaseService.autentica_user("2"); break;    
      default: return false; break;
    }
  }
}
