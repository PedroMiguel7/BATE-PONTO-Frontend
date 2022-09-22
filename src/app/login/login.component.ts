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

  email: string = "";
  senha: string = "";

  fazLogin(){
    console.log(this.email)
    this.LoginService.fazLogin({
      email: this.email,
      senha: this.senha
    })
  }
}
