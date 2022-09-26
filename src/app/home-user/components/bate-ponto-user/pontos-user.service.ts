import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment.prod';
import { PONTO } from './bate-ponto-user.interface';

@Injectable({
  providedIn: 'root'
})
export class PontosUserService {

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  obterTodos(IDUSER:any){
    return this.httpclient.get<PONTO[]>(`${API_PATH}/frequencias/${[IDUSER]}`).toPromise();
  }

  baterPonto(IDUSER:any, ponto: any){
    return this.httpclient.post<PONTO>(`${API_PATH}/frequencias/${[IDUSER]}`, ponto).toPromise();
  }
}
