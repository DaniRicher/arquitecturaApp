import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDocenteComponent } from './pages/main-docente/main-docente.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ListaDocenteComponent } from './pages/lista-docente/lista-docente.component';
import { CalendarioDocenteComponent } from './pages/calendario-docente/calendario-docente.component';

const routes: Routes = [
  {
    path:'',
    component: MainDocenteComponent,
    children:[
      {path:'grupos', component: GruposComponent},
      {path:'lista', component: ListaDocenteComponent},
      {path:'calendario', component: CalendarioDocenteComponent},
      {path:'**', redirectTo: 'grupos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
