import { Component, OnInit } from '@angular/core';
import { PONTO } from './bate-ponto-user.interface';

@Component({
  selector: 'app-bate-ponto-user',
  templateUrl: './bate-ponto-user.component.html',
  styleUrls: ['./bate-ponto-user.component.scss']
})
export class BatePontoUserComponent implements OnInit {
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

  pontos: Array<PONTO> = [this.ponto2, this.ponto];

  constructor() { }

  loading: boolean = false
  
  ngOnInit(): void {
  }

}
