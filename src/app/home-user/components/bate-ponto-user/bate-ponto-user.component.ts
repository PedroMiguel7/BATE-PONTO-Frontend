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
    data: 'ter, 18 de maio de 2022',
    hora: '08:10',
    userID: 3,
    status: 1
  }

  ponto2:  PONTO = {
    id: 4,
    data: 'ter, 18 de maio de 2022',
    hora: '11:40',
    userID: 3,
    status: 2
  }

  pontos: Array<PONTO> | any = [this.ponto2, this.ponto];

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