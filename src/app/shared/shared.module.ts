import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    NavBarComponent,
    ErrorPageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
