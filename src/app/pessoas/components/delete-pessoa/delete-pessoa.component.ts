import { PessoasService } from './../../pessoas.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../pessoas.interface';

@Component({
  selector: 'app-delete-pessoa',
  templateUrl: './delete-pessoa.component.html',
  styleUrls: ['./delete-pessoa.component.scss'],
})
export class DeletePessoaComponent implements OnInit {
  @Input() pessoa: Pessoa | any = {}
  @Output() update = new EventEmitter<any>();

  constructor(private PessoasService: PessoasService) {}

  ngOnInit(): void {}

  cancel(): void {}

  confirm(): void {}

  deletePessoa(){
    this.PessoasService
                    .deletePessoa(this.pessoa.id)
                    .then((res) => this.update.emit(null))
                    .catch((err) => console.error(err))
  }
}
