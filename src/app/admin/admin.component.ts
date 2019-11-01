import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {label: 'Producers', icon: 'fa fa-fw fa-industry', routerLink: ['producers']},
      {label: 'Categories', icon: 'fa fa-fw fa-sticky-note', routerLink: ['categories']},
      {label: 'DeviceTypes', icon: 'fa fa-fw fa-tags', routerLink: ['devicetypes']},
      {label: 'Devices', icon: 'fa fa-fw fa-tv', routerLink: ['devices']},
      // {label: 'Orders', icon: 'fa fa-fw fa-twitter', routerLink: ['orders']},
      // {label: 'Users', icon: 'fa fa-fw fa-twitter', routerLink: ['users']},
  ];
  }

}
