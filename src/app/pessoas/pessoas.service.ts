import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { API_PATH } from 'src/environments/environment.prod';
import { Pessoa } from './pessoas.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private HttpClient: HttpClient) { }

  // Headers
  token = localStorage.getItem('access_token')
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` })
  }

  getPessoas(orderBy: string, order: string) {
    return this.HttpClient.get<Pessoa[]>(`${API_PATH}/usuarios/list_user?orderBy=${orderBy}&order=${order}`, this.httpOptions).toPromise()
  }
}
