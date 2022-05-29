import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuEstudianteComponent } from './menu-estudiante/menu-estudiante.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuEstudianteComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    MenuComponent,
    MenuEstudianteComponent
  ]
})
export class SharedModule { }
