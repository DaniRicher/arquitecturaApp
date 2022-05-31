import { Component, OnInit } from '@angular/core';
import { Materia } from '../../interfaces/materia.interfaces';
import {DialogService} from 'primeng/dynamicdialog';
import { CrudListaComponent } from '../crud-lista/crud-lista.component';

@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styles: [`
  .estilo{
    margin:10px;
  }
  `],
  providers: [DialogService]
})
export class ListaDocenteComponent implements OnInit {

  materias:Materia[]=[
    {
      nombre:'Programacion web',
      horario:'8-10',
      grupo: 2,
      asistencia:'20-05-10',
    },
    {
      nombre:'Innovación empresarial',
      horario:'2-4',
      grupo: 1,
      asistencia:'20-05-15',
    },
  ]
  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }
  abrirLista(){
    const ref=this.dialogService.open(CrudListaComponent,{
      header: '',
        width: '70%'
    });
  }

}
