import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCaseService {

  constructor(private Router: Router) { }

  public autentica_user(tipo: any): boolean {
    if(tipo === "2") return true
    else {
      this.Router.navigate(['/home-adm']);
      return false
    }
  }
}
