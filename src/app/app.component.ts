import {Component, OnInit} from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {EventInput} from "@fullcalendar/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agenda';

  calendarEvents: EventInput[];
  calendarPlugins = [dayGridPlugin, interactionPlugin]; // important!

  dateClick(event) {
    console.log("event", event);
  }

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

}
