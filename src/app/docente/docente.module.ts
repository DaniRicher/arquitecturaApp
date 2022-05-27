import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ListaDocenteComponent } from './pages/lista-docente/lista-docente.component';
import { MainDocenteComponent } from './pages/main-docente/main-docente.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GruposComponent,
    ListaDocenteComponent,
    MainDocenteComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class DocenteModule { }
