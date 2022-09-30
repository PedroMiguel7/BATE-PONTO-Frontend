import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment.prod';
import { PONTO } from './bate-ponto-user.interface';

@Injectable({
  providedIn: 'root'
})
export class PontosUserService {

  // não usando 

  constructor(private httpclient: HttpClient) { }

  token: any = localStorage.getItem("access_token");

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` })
  }
  
  obterTodos(IDUSER:any){
    return this.httpclient.get<PONTO[]>(`${API_PATH}/frequencia/lista?orderBy=nome&order=asc&data=2022-09-29${[IDUSER]}`, this.httpOptions).toPromise();
  }

  baterPonto(IDUSER:any, ponto: any){
    return this.httpclient.post<PONTO>(`${API_PATH}/frequencias/${[IDUSER]}`, ponto, this.httpOptions).toPromise();
  }
}
