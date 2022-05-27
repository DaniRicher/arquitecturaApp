import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CheckboxModule,
    FormsModule,
    CardModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule
  ]
})
export class PrimengModule { }
