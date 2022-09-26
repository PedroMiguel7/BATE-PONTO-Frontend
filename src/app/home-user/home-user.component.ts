import { Component, OnInit } from '@angular/core';
import { user } from './home-user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  constructor() {}

  loading: boolean = false
  user : user = {}

  ngOnInit(): void {
    const token: any = localStorage.getItem("access_token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.user = decodedToken
    console.log(this.user)
  }
}
