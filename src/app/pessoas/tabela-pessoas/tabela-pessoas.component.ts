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
  loading = false
  dataList: Pessoa[] = []

  getPessoas(){
    this.loading = true
    this.PessoasService.getPessoas(this.orderBy, this.order)
    .then((res: any) => {
      this.dataList = res.data;
      this.loading = false
    })
  }

  changeFiltro(orderBy: number, order: number) {
    switch (orderBy) {
      case 1: this.orderBy = "id"; break;
      case 2: this.orderBy = "nome"; break;
      case 3: this.orderBy = "email"; break;
      case 4: this.orderBy = "tipo"; break;
      case 5: this.orderBy = "created_at"; break;
      default: break;
    }

    switch (order) {
      case 1: this.order = "asc"; break;
      case 2: this.order = "desc"; break;
      default: break;
    }
    this.getPessoas()
  }

  ngOnInit(): void {
    this.getPessoas()
  }
}
