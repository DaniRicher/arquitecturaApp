import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-estudiante',
  templateUrl: './menu-estudiante.component.html',
  styles: [`
    .espacio{
      margin-left: 5px;
      margin-top:5px;
    }
  `]
})
export class MenuEstudianteComponent implements OnInit {

  items: MenuItem[]=[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Estudiante', icon: 'pi pi-fw pi-user', routerLink:'/estudiante/materias'},
      {label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink:'/estudiante/calendario'},
      {label: 'Listas', icon: 'pi pi-fw pi-calendar', routerLink:'/estudiante/lista'},
  ];
  }

}
