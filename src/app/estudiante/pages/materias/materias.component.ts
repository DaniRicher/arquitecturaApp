import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ListaEstudianteComponent } from '../lista-estudiante/lista-estudiante.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styles: [`
    .estilo{
        margin: 10px;
        
    },
    p-card{
      cursor:pointer;
    }
  `],
  providers:[DialogService]
})
export class MateriasComponent implements OnInit {

  asignaturas=[
    {
      materia:'Programacion Web',
      horario:'',
      grupo:0,
    },
    {
      materia:'Arquitectura',
      horario:'8-10',
      grupo:1,
    },
    {
      materia:'Cálculo Integral',
      horario:'2-4',
      grupo:4,
    },
    {
      materia:'Cálculo Integral',
      horario:'2-4',
      grupo:4,
    },
    {
      materia:'Cálculo Integral',
      horario:'2-4',
      grupo:4,
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
    
    const ref=this.dialogService.open(ListaEstudianteComponent,{
      header:`Detalles `,
      width:'70%'
    })
  }

}
