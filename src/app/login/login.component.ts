import { LoginService } from './login.service';
import { UserModel } from './login.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  router: Router;

  constructor(
    private LoginService: LoginService,
    private formBuilder: FormBuilder,
    router: Router
  ) {
    this.router = router;
  }

  user: UserModel = {
    email: '',
    senha: '',
  };

  formLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });

  loading: boolean = false;

  // Personalização do alert
  alert: any = {
    type: '',
    message: '',
    visible: false,
  };

  ngOnInit(): void {}

  fazLogin() {
    this.loading = true;

    this.LoginService.fazLogin(this.user)
      .then((res: any): any => {
        localStorage.setItem('access_token', res.token);

        // Exibindo o alert em caso de sucesso
        this.alert = {
          type: 'success',
          message: 'Login realizado com sucesso',
          visible: true,
        };

        // Traduzindo o token e redirecionando o usuario
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(res.token);

        switch (decodedToken.tipo) {
          case "1":
            this.router.navigate(['/home-adm']);
            break;
          case "2":
            this.router.navigate(['/home-user']);
            break;
          default:
            this.alert = {
              type: 'error',
              message: 'Tipo de Usuário desconhecido',
              visible: true,
            };
            break;
        }
      })

      .catch((err) => {
        this.loading = false;

        // Exibindo o alert em casos de erro
        switch (err.status) {
          case 400:
            this.alert = {
              type: 'error',
              message: 'ERRO! Dados Inválidos.',
            };
            break;

          default:
            this.alert = {
              type: 'error',
              message: 'ERRO! Uma Falha Inesperada ocorreu.',
            };
            break;
        }
        this.alert.visible = true;
      });
  }
}
