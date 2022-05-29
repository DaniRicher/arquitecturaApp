import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendario-docente',
  templateUrl: './calendario-docente.component.html',
  styleUrls: ['./calendario-docente.component.css']
})
export class CalendarioDocenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg:any) {
    // alert('date click! ' + arg.dateStr);
    console.log(arg.dateStr);
  }

}
