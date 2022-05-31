import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Materia } from 'src/app/docente/interfaces/materia.interfaces';
import { Estudiante } from '../../../docente/interfaces/Estudiante.inteface';


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
      nombreCompleto:'Daniel',
      fecha:'2022-05-10',
    }
  ];
  selectedValues:string[]=[];
  materias:Materia[]=[
    {
      nombre:'Programacion web',
      horario:'8-10',
      grupo: 2,
      asistencia:'2020'
    },
    {
      nombre:'Innovación empresarial',
      horario:'2-4',
      grupo: 1,
      asistencia:'2020'
    }
]
  constructor() { }

  ngOnInit(): void {
    
  }

}
