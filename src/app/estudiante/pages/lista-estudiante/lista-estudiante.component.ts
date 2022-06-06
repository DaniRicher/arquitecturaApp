import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Materia } from 'src/app/docente/interfaces/materia.interfaces';


@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styles: [`
  .estilo{
        margin: 10px;
    },
    img{
      width: 10px; 
    }
  `],
  providers:[MessageService]
})
export class ListaEstudianteComponent implements OnInit {
  
  estudiantes:any[]=[
    {
      nombreCompleto:'Daniel Alvarado',
      fecha:'2022-05-10',
      asistencia:true
    },
    {
      nombreCompleto:'Daniel Alvarado',
      fecha:'2022-05-12',
      asistencia:true
    },
    {
      nombreCompleto:'Daniel Alvarado',
      fecha:'2022-05-14',
      asistencia:true
    },
    {
      nombreCompleto:'Daniel Alvarado',
      fecha:'2022-05-18',
      asistencia:false
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
