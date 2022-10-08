import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCaseService {

  constructor(private Router: Router) { }

  public autentica_adm(tipo: any): boolean {
    switch (tipo) {
      case "1": 
      if(this.Router.url === '/home-user') {this.Router.navigate(['/home-adm']); return false;}
      return true; 
      break;
      default: this.Router.navigate(['/home-user']); return false; break;
    }
  }
}
