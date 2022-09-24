import { Component, OnInit } from '@angular/core';
import { USER } from './home-user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})


export class HomeUserComponent implements OnInit {


  constructor() 
  {}


  loading: boolean = false

  ngOnInit(): void {
  }

}
