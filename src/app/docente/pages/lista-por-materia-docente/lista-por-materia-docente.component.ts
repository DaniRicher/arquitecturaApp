import { Component, OnInit } from '@angular/core';
import { Materia } from '../../interfaces/materia.interfaces';
import { DialogService } from 'primeng/dynamicdialog';
import { CrudListaComponent } from '../crud-lista/crud-lista.component';

@Component({
  selector: 'app-lista-por-materia-docente',
  templateUrl: './lista-por-materia-docente.component.html',
  styleUrls: ['./lista-por-materia-docente.component.css'],
  providers:[DialogService]
})
export class ListaPorMateriaDocenteComponent implements OnInit {

  asignatura:Materia[]=[
    {
      nombre:'Programación Web',
      grupo:1,
      horario:'8-10',
      asistencia:'2020-15-06'
    }
  ]

  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }

  abrirLista(){
    const ref= this.dialogService.open(CrudListaComponent,{
      header:'Asistencia',
      width: '80%'
    })
  }

}
