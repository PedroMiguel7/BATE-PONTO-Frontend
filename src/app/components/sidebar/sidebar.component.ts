import { Component, OnInit, Output } from '@angular/core';
import { navbarData } from './navData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  navData = navbarData;

  constructor() { }

  ngOnInit(): void {
    
  }

}
