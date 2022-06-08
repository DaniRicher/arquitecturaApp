import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ListaEstudianteComponent } from '../lista-estudiante/lista-estudiante.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styles: [`
    .estilo{
        margin: 10px;
    }
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
      horario:'14-16',
      grupo:2,
    },
    {
      materia:'Arquitectura',
      horario:'8-10',
      grupo:1,
    },
    {
      materia:'Cálculo Diferencial',
      horario:'17-19',
      grupo:4,
    },
    {
      materia:'Inteligencia Artificial',
      horario:'6-8',
      grupo:3,
    },
    {
      materia:'Redes',
      horario:'10-12',
      grupo:4,
    }
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
