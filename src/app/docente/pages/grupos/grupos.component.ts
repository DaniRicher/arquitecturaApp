import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Materia } from '../../interfaces/materia.interfaces';
import { ListaPorMateriaDocenteComponent } from '../lista-por-materia-docente/lista-por-materia-docente.component';


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

  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }
  

  lista(){
    const ref=this.dialogService.open(ListaPorMateriaDocenteComponent,{
      header:``,
        width: '75%'
    })
  }
}
