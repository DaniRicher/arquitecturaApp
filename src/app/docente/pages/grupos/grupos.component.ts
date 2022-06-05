import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Materia } from '../../interfaces/materia.interfaces';
import { ListaPorMateriaDocenteComponent } from '../lista-por-materia-docente/lista-por-materia-docente.component';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls:['./style.css'],
  providers:[DialogService]
})
export class GruposComponent implements OnInit {
  
  materias:Materia[]=[
    {
      nombre:'Programacion Web',
      horario:'',
      grupo:0,
      asistencia:'ff'
    },
    {
      nombre:'Programacion',
      horario:'',
      grupo:0,
      asistencia:'fff',
    },
    
  ]
  get usuario(){
    return this.authService.usuario;
  }

  constructor(private dialogService:DialogService,
              private authService:AuthService) { }

  ngOnInit(): void {
  }
  

  lista(){
    const ref=this.dialogService.open(ListaPorMateriaDocenteComponent,{
      header:``,
        width: '90%'
    })
  }
}
