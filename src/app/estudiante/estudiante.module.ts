import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { MainEstudiantesComponent } from './pages/main-estudiantes/main-estudiantes.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarioEstudianteComponent } from './pages/calendario-estudiante/calendario-estudiante.component';




@NgModule({
  declarations: [
    ListaEstudianteComponent,
    MateriasComponent,
    MainEstudiantesComponent,
    CalendarioEstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class EstudianteModule { }
