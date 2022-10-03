import { PessoasService } from './../../pessoas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-post-pessoa',
  templateUrl: './post-pessoa.component.html',
  styleUrls: ['./post-pessoa.component.scss'],
})
export class PostPessoaComponent implements OnInit {
  @Output() update = new EventEmitter<any>();

  isVisible = false;
  isOkLoading = false;
  pwdVisible = false
  pwdConfirmVisible = false

  constructor(private fb: UntypedFormBuilder, private PessoaService: PessoasService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  validateForm!: UntypedFormGroup;

  submitForm(): void {
    this.isOkLoading = true;

    if (this.validateForm.valid) {
      this.PessoaService.postPessoa(this.validateForm.value)
                        .then((res) => {
                          this.isOkLoading = false;
                          this.isVisible = false;
                          this.update.emit(null)
                        })
                        .catch((err) => console.error(err))
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.isOkLoading = false;
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      Nome: [null, [Validators.required]],
      Email: [null, [Validators.required]],
      Senha: [null, [Validators.required]],
      Confirmacao: [null, [Validators.required]],
      Tipo: [null, [Validators.required]]
    });
  }
}
