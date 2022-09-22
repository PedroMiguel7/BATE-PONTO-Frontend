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


  fazLogin(){
    const user: UserModel = {
      email: "admin",
      senha: "admin"
    }

    this.LoginService.fazLogin(user)
  }
}
