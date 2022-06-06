import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {

    
    this.items = [
      {label: this.authService.usuario.name,disabled:true},
      {label: 'Asignaturas', icon: 'pi pi-fw pi-user',  routerLink:'/docente/grupos'},
      // {label: 'Listas', icon: 'pi pi-fw pi-bookmark', routerLink:'/docente/lista'},
      // {label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink:'/docente/calendario'},
      // {label: 'Cerrar Sesion', icon: 'pi pi-sign-out', routerLink:'../auth/login',}
  ];
  }

  logout(){
    this.router.navigateByUrl('/auth'),
    this.authService.logout();
  }

}
