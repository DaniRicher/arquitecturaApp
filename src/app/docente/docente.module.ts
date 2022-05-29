import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ListaDocenteComponent } from './pages/lista-docente/lista-docente.component';
import { MainDocenteComponent } from './pages/main-docente/main-docente.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarioDocenteComponent } from './pages/calendario-docente/calendario-docente.component';


@NgModule({
  declarations: [
    GruposComponent,
    ListaDocenteComponent,
    MainDocenteComponent,
    CalendarioDocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class DocenteModule { }
