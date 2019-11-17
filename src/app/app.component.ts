import {Component, OnInit} from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {EventInput} from "@fullcalendar/core";

//Dialog
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agenda';

  calendarEvents: EventInput[];
  calendarPlugins = [dayGridPlugin, interactionPlugin]; // important!

  constructor(private dialog:MatDialog){}

  ngOnInit(): void {

    this.calendarEvents = [
      {
        title: 'Event Now',
        extendedProps: {
          reservationId: 12
        },
        start: new Date()
      }
    ];

  }

  dateClick(event) {
    console.log("event", event);
    this.dialog.open(DialogComponent,{data:"texto de prueba"})
                .afterClosed()
                  .subscribe((confirmado)=>{
                    if(confirmado){
                      console.log("si");
                    }else{
                      console.log("no");
                    }
                  })
  }

}
