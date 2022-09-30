import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoas.interface';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
