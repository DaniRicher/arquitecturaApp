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
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Docente', icon: 'pi pi-fw pi-user', routerLink:'/docente/grupos'},
      {label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink:'/docente/calendario'},
      {label: 'Listas', icon: 'pi pi-fw pi-calendar', routerLink:'/docente/lista'},
  ];
  }

}
