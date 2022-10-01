import { Component, OnInit, Output } from '@angular/core';
import { navbarData } from './navData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navData = navbarData;
  userTipo: number = 1;

  fazLogout() {
    localStorage.removeItem('access_token');
  }

  constructor() {}

  ngOnInit(): void {}
}
