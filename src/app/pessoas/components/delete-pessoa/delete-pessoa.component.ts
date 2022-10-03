import { PessoasService } from './../../pessoas.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../pessoas.interface';

@Component({
  selector: 'app-delete-pessoa',
  templateUrl: './delete-pessoa.component.html',
  styleUrls: ['./delete-pessoa.component.scss'],
})
export class DeletePessoaComponent implements OnInit {
  @Input() pessoa: Pessoa | any = {}
  constructor(private PessoasService: PessoasService) {}

  ngOnInit(): void {}

  cancel(): void {}

  confirm(): void {}

  deletePessoa(){
    this.PessoasService
                    .deletePessoa(this.pessoa.id)
                    .then((res) => console.log(res))
                    .catch((err) => console.error(err))
  }
}
