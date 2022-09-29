import { PONTO } from './components/bate-ponto-user/bate-ponto-user.interface';
import { HomeUserSsService } from './home-user-ss.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../home-user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  ponto: PONTO = {
    id: 3,
    userID: 3,
    freqID: 2,
    dataEntrada: '17/08/2009 08:00:00 -3:00',
    dataSaida: '17/08/2009 11:50:03 -3:00',
  }

  ponto2:  PONTO = {
    id: 4,
    userID: 3,
    freqID: 3,
    dataEntrada: '18/08/2009 08:05:10 -3:00',
    dataSaida: '18/08/2009 11:54:23 -3:00',
  }

  ponto3:  PONTO = {
    id: 4,
    userID: 3,
    freqID: 3,
    dataEntrada: '19/08/2009 08:10:10 -3:00',
    dataSaida: "19/08/2009 11:59:44 -3:00",
  }

  pontos: Array<PONTO> | any = [this.ponto2, this.ponto, this.ponto3];

  constructor(private HomeUserSsService: HomeUserSsService) { }

  loading: boolean = false
  user: user = {}

  ngOnInit(): void {
    const token: any = localStorage.getItem("access_token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.user = decodedToken
  }

  batendoPonto(IDUSER: any) {
    this.loading = true
    this.HomeUserSsService.baterPonto(IDUSER, this.ponto)
      .then(pontos => console.log(pontos))
      .catch(err => console.log(err))
  }

  getPonto(IDUSER: PONTO[]) {
    this.HomeUserSsService.obterTodos(IDUSER)
      .then(pontos => this.pontos = pontos)
      .catch(err => console.log(err))
  }
}
