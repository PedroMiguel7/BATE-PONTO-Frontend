import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment.prod';
import { PONTO } from './bate-ponto-user.interface';

@Injectable({
  providedIn: 'root'
})
export class PontosUserService {

  constructor(private httpclient: HttpClient) { }

  obterTodos(IDUSER:any){
    return this.httpclient.get<PONTO[]>(`${API_PATH}/frequencias/${[IDUSER]}`).toPromise();
  }
}
