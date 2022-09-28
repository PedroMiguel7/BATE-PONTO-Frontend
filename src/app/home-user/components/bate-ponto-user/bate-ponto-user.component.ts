import { Component, OnInit, Input  } from '@angular/core';
import { PONTO } from './bate-ponto-user.interface';
import { PontosUserService } from './pontos-user.service';

@Component({
  selector: 'app-bate-ponto-user',
  templateUrl: './bate-ponto-user.component.html',
  styleUrls: ['./bate-ponto-user.component.scss']
})

export class BatePontoUserComponent implements OnInit {
  @Input() IDUSER!: any;
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

  constructor(private pontosService: PontosUserService) { }

  loading: boolean = false
  
  ngOnInit(): void { 

  }

  batendoPonto(IDUSER: any){
    this.loading = true
    this.pontosService.baterPonto(IDUSER, this.ponto)
    .then(pontos => console.log(pontos))
    .catch(err => console.log(err))
  }

  getPonto(IDUSER: PONTO[]){
    this.pontosService.obterTodos(IDUSER)
    .then(pontos => this.pontos = pontos)
    .catch(err => console.log(err))
  }
}