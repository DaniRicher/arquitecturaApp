import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

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
  constructor(private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Estudiante', icon: 'pi pi-fw pi-user', routerLink:'/estudiante/materias'},
      // {label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink:'/estudiante/calendario'}, 
      // {label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out', routerLink:'../auth/login'}, 
  ];
  }
  logout(){
    this.router.navigateByUrl('/auth'),
    this.authService.logout();
  }

}
