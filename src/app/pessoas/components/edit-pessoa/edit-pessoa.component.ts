import { Pessoa } from './../../pessoas.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html',
  styleUrls: ['./edit-pessoa.component.scss'],
})
export class EditPessoaComponent implements OnInit {
  constructor() {}

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  ngOnInit(): void {}
}
