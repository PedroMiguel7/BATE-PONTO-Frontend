import { LoginService } from './login.service';
import { UserModel } from './login.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }
  ngOnInit(): void {
  }

  loading: boolean = false
  email: string = "";
  senha: string = "";

  fazLogin(){
    this.loading = true

    this.LoginService.fazLogin({
      email: this.email,
      senha: this.senha
    }).then((res: any): any => {
      localStorage.setItem("access_token", res.token);
      
    }).catch(err => {
      this.loading = false
    })
  }
}
