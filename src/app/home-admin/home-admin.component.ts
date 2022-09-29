import { Component, OnInit } from '@angular/core';
import { user } from '../home-user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor() { }

  user : user = {}
  ngOnInit(): void {
    const token: any = localStorage.getItem("access_token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.user = decodedToken
  }

}
