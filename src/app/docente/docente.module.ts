import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ListaDocenteComponent } from './pages/lista-docente/lista-docente.component';
import { MainDocenteComponent } from './pages/main-docente/main-docente.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarioDocenteComponent } from './pages/calendario-docente/calendario-docente.component';
import { CrudListaComponent } from './pages/crud-lista/crud-lista.component';
import { ListaPorMateriaDocenteComponent } from './pages/lista-por-materia-docente/lista-por-materia-docente.component';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    GruposComponent,
    ListaDocenteComponent,
    MainDocenteComponent,
    CalendarioDocenteComponent,
    CrudListaComponent,
    ListaPorMateriaDocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    PrimengModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[FormBuilder]
})
export class DocenteModule { }
