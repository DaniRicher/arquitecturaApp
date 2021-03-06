import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './pages/materias/materias.component';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { MainEstudiantesComponent } from './pages/main-estudiantes/main-estudiantes.component';
import { CalendarioEstudianteComponent } from './pages/calendario-estudiante/calendario-estudiante.component';

const routes: Routes = [
  {
    path:'',
    component:MainEstudiantesComponent,
    children:[
      {path:'materias', component: MateriasComponent},
      {path:'lista', component: ListaEstudianteComponent},
      {path:'calendario', component: CalendarioEstudianteComponent},
      {path:'**', redirectTo:'materias'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
