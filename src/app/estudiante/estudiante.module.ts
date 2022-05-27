import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { MainEstudiantesComponent } from './pages/main-estudiantes/main-estudiantes.component';


@NgModule({
  declarations: [
    ListaEstudianteComponent,
    MateriasComponent,
    MainEstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
