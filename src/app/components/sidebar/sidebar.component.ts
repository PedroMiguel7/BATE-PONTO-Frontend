import { Component, OnInit, Output } from '@angular/core';
import { navbarData } from './navData';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  navData = navbarData;

  
 
  constructor( private LoginService: LoginService ) { }

  ngOnInit(): void {

  }

  fazLogout(){
    localStorage.removeItem('access_token')
  }

}
