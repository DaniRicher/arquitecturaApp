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
import {CalendarModule} from 'primeng/calendar';


import {StyleClassModule} from 'primeng/styleclass';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import {TableModule} from 'primeng/table';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CheckboxModule,
    FormsModule,
    CardModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule,
    CalendarModule,
    FullCalendarModule, // register FullCalendar with you app
    StyleClassModule,
    TableModule,
    DynamicDialogModule,
    ToastModule,
    ToolbarModule
  ]
})
export class PrimengModule { }
