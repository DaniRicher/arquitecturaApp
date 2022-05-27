import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .espacio{
      margin-left: 5px;
      margin-top:5px;
    }
  `]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];
  isLoading:any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Docente', icon: 'pi pi-fw pi-user'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
  ];
  }

}
