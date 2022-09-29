import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { Pessoa } from '../pessoas.interface';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.scss']
})
export class TabelaPessoasComponent implements OnInit {

  constructor(private PessoasService: PessoasService) { }

  orderBy = "id"
  order = "asc"

  dataList: Pessoa[] = []
  cabecalhos: string[] = []
  ngOnInit(): void {
    this.PessoasService
                    .getPessoas(this.orderBy, this.order)
                    .then((res: any) => {
                      this.dataList = res.data;
                      this.cabecalhos = Object.keys(res.data[0])
                    })
  }
}
